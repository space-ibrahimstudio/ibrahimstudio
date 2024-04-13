import React, { useState } from "react";
import { InputProps, baseDefaultValues, selectDefaultValues } from "./types";
import { ISInput } from "@ibrahimstudio/jsx";
import { ISChevron, ISEyeOpen, ISEyeSlash } from "@ibrahimstudio/icons";
import { getInputStyles } from "@ibrahimstudio/styles";
import s from "./input.module.css";

const Input: React.FC<InputProps> = (props) => {
  const inputprops = { ...baseDefaultValues, ...selectDefaultValues, ...props };
  const [passwordSeen, setPasswordSeen] = React.useState<boolean>(false);
  const [optionsPosition, setOptionsPosition] = React.useState<
    "above" | "below"
  >("below");
  const [selectOpen, setSelectOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string | number>(
    inputprops.value
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const ref = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const togglePasswordSeen = () => {
    setPasswordSeen(!passwordSeen);
  };

  const renderVariant = () => {
    switch (inputprops.variant) {
      case "input":
        return (
          <input
            id={inputprops.id}
            form={inputprops.formId}
            className={s.inputFieldInput}
            type={
              inputprops.type === "password"
                ? passwordSeen
                  ? "text"
                  : "password"
                : inputprops.type
            }
            name={inputprops.name}
            placeholder={
              inputprops.isReadonly && inputprops.value === ""
                ? inputprops.fallbackValue
                : inputprops.placeholder
            }
            value={inputprops.value}
            onChange={inputprops.onChange}
            autoComplete={inputprops.autoComplete}
            required={inputprops.isRequired}
            readOnly={inputprops.isReadonly}
            disabled={inputprops.isDisabled}
            min={inputprops.min}
            max={inputprops.max}
            minLength={inputprops.minLength}
            maxLength={inputprops.maxLength}
          />
        );
      case "select":
        const filteredOptions =
          searchTerm.length > 0
            ? inputprops.options.filter((option) =>
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : inputprops.options;

        const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedOption(e.target.value);
          inputprops.onSelect(e.target.value);
        };

        const handleOptionClick = (optionValue: string | number) => {
          setSelectedOption(optionValue);
          inputprops.onSelect(optionValue);
          setSelectOpen(false);
        };

        return (
          <React.Fragment>
            <input
              id={inputprops.id}
              form={inputprops.formId}
              className={`${s.inputFieldInput} ${
                inputprops.variant === "select" ? s.select : ""
              }`}
              name={inputprops.name}
              value={
                selectedOption === ""
                  ? inputprops.placeholder
                  : inputprops.options.find(
                      (option) => option.value === selectedOption
                    )?.label || inputprops.placeholder
              }
              onChange={handleSelectChange}
              required={inputprops.isRequired}
              readOnly={true}
              disabled={inputprops.isDisabled}
              onClick={() => setSelectOpen(!selectOpen)}
            />
            {selectOpen && (
              <div
                className={`${s.optionsContainer} ${
                  selectOpen ? s.opened : s.closed
                } ${optionsPosition === "above" ? s.above : s.below}`}
                ref={optionsRef}
              >
                {inputprops.isSearchable ? (
                  <input
                    type="text"
                    className={s.searchableInput}
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                ) : (
                  <div
                    className={`${s.option} ${
                      selectedOption === "" ? s.selected : ""
                    }`}
                    onClick={() => {
                      setSelectOpen(false);
                      setSelectedOption("");
                    }}
                  >
                    <b className={s.optionText}>{inputprops.placeholder}</b>
                  </div>
                )}
                {filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`${s.option} ${
                      selectedOption === option.value ? s.selected : ""
                    }`}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    <b className={s.optionText}>{option.label}</b>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        );
      case "textarea":
        return (
          <textarea
            id={inputprops.id}
            form={inputprops.formId}
            className={s.inputFieldInput}
            name={inputprops.name}
            placeholder={
              inputprops.isReadonly && inputprops.value === ""
                ? inputprops.fallbackValue
                : inputprops.placeholder
            }
            value={inputprops.value}
            onChange={inputprops.onChange}
            autoComplete={inputprops.autoComplete}
            required={inputprops.isRequired}
            readOnly={inputprops.isReadonly}
            disabled={inputprops.isDisabled}
            rows={inputprops.rows}
            minLength={inputprops.minLength}
            maxLength={inputprops.maxLength}
          />
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    const updateOptionsPosition = () => {
      if (optionsRef.current && ref.current) {
        const inputRect = ref.current.getBoundingClientRect();

        const spaceAbove = inputRect.top;
        const spaceBelow = window.innerHeight - inputRect.bottom;

        if (spaceAbove > spaceBelow) {
          setOptionsPosition("above");
          optionsRef.current.style.maxHeight = `${spaceAbove}px`;
        } else {
          setOptionsPosition("below");
          optionsRef.current.style.maxHeight = `${spaceBelow}px`;
        }
      }
    };

    if (selectOpen) {
      updateOptionsPosition();
      window.addEventListener("resize", updateOptionsPosition);
    }

    return () => {
      window.removeEventListener("resize", updateOptionsPosition);
    };
  }, [selectOpen]);

  return (
    <ISInput
      id={inputprops.id}
      baseColor={inputprops.baseColor}
      primaryColor={inputprops.primaryColor}
      secondaryColor={inputprops.secondaryColor}
      className={s.inputBody}
    >
      <label
        htmlFor={inputprops.id}
        className={`${s.inputLabel} ${
          inputprops.isLabeled && inputprops.labelText ? "" : s.none
        }`}
      >
        {`${inputprops.labelText} ${inputprops.isRequired ? "*" : ""}`}
      </label>
      <div
        className={`${s.inputField} ${inputprops.errorContent ? s.error : ""} ${
          inputprops.isReadonly ? s.readonly : ""
        } ${inputprops.isDisabled ? s.disabled : ""} ${
          inputprops.variant !== "textarea" ? s.plain : ""
        } ${inputprops.variant !== "select" ? s.inputVariant : ""}`}
        ref={inputprops.variant === "select" ? ref : undefined}
        style={getInputStyles(inputprops.radius)}
      >
        {inputprops.startContent && (
          <div className={`${s.inputIcon} ${s.start}`}>
            {inputprops.startContent}
          </div>
        )}
        {renderVariant()}
        {inputprops.variant === "input" && inputprops.type === "password" && (
          <div
            className={`${s.inputIcon} ${s.password}`}
            onClick={togglePasswordSeen}
            aria-label={passwordSeen ? "Hide Password" : "Show Password"}
            role="button"
            tabIndex={0}
          >
            {passwordSeen ? (
              <ISEyeSlash
                width="100%"
                height="100%"
                color={inputprops.secondaryColor}
              />
            ) : (
              <ISEyeOpen
                width="100%"
                height="100%"
                color={inputprops.secondaryColor}
              />
            )}
          </div>
        )}
        {inputprops.variant === "select" && (
          <div
            className={`${s.inputIcon} ${s.select} ${
              selectOpen ? s.flipped : ""
            }`}
            aria-label={selectOpen ? "Close Option" : "Open Option"}
            tabIndex={0}
          >
            <ISChevron
              width="100%"
              height="100%"
              direction="down"
              color={inputprops.secondaryColor}
            />
          </div>
        )}
        {inputprops.variant === "input" &&
          inputprops.type !== "password" &&
          inputprops.endContent && (
            <div className={`${s.inputIcon} ${s.end}`}>
              {inputprops.endContent}
            </div>
          )}
      </div>
      {inputprops.errorContent && (
        <h6 className={s.inputInfoText} style={{ color: "#FF6347" }}>
          {inputprops.errorContent}
        </h6>
      )}
      {inputprops.infoContent && (
        <h6
          className={s.inputInfoText}
          style={{ color: inputprops.primaryColor }}
        >
          {inputprops.infoContent}
        </h6>
      )}
    </ISInput>
  );
};

export default Input;

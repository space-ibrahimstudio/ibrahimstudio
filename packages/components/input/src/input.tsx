import React from "react";
import { InputProps, baseDefault, plainDefault, selectDefault } from "./types";
import { ISInput } from "@ibrahimstudio/jsx";
import { useMousedown, useResize } from "@ibrahimstudio/hooks";
import { ISChevron, ISEyeOpen, ISEyeSlash } from "@ibrahimstudio/icons";
import { getInputStyles } from "@ibrahimstudio/styles";
import s from "./input.module.css";

const Input: React.FC<InputProps> = (props) => {
  const input = { ...baseDefault, ...plainDefault, ...selectDefault, ...props };
  const [passwordSeen, setPasswordSeen] = React.useState<boolean>(false);
  const [selectOpen, setSelectOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [optionsPosition, setOptionsPosition] = React.useState<
    "above" | "below"
  >("below");
  const [selectedOption, setSelectedOption] = React.useState<string | number>(
    input.value
  );
  const ref = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const togglePasswordSeen = () => {
    setPasswordSeen(!passwordSeen);
  };

  const renderVariant = () => {
    switch (input.variant) {
      case "input":
        return (
          <input
            id={input.id}
            form={input.formId}
            className={s.inputFieldInput}
            type={
              input.type === "password"
                ? passwordSeen
                  ? "text"
                  : "password"
                : input.type
            }
            name={input.name}
            placeholder={
              input.isReadonly && input.value === ""
                ? input.fallbackValue
                : input.placeholder
            }
            value={input.value}
            onChange={input.onChange}
            autoComplete={input.autoComplete}
            required={input.isRequired}
            readOnly={input.isReadonly}
            disabled={input.isDisabled}
            min={input.min}
            max={input.max}
            minLength={input.minLength}
            maxLength={input.maxLength}
          />
        );
      case "select":
        const filteredOptions =
          searchTerm.length > 0
            ? input.options.filter((option) =>
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : input.options;

        const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedOption(e.target.value);
          input.onSelect(e.target.value);
        };

        const handleOptionClick = (optionValue: string | number) => {
          setSelectedOption(optionValue);
          input.onSelect(optionValue);
          setSelectOpen(false);
        };

        return (
          <React.Fragment>
            <input
              id={input.id}
              form={input.formId}
              className={`${s.inputFieldInput} ${
                input.variant === "select" ? s.select : ""
              }`}
              name={input.name}
              value={
                selectedOption === ""
                  ? input.placeholder
                  : input.options.find(
                      (option) => option.value === selectedOption
                    )?.label || input.placeholder
              }
              onChange={handleSelectChange}
              required={input.isRequired}
              readOnly={true}
              disabled={input.isDisabled}
              onClick={() => setSelectOpen(!selectOpen)}
            />
            {selectOpen && (
              <div
                className={`${s.optionsContainer} ${
                  selectOpen ? s.opened : s.closed
                } ${optionsPosition === "above" ? s.above : s.below}`}
                ref={optionsRef}
              >
                {input.isSearchable ? (
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
                    <b className={s.optionText}>{input.placeholder}</b>
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
            id={input.id}
            form={input.formId}
            className={s.inputFieldInput}
            name={input.name}
            placeholder={
              input.isReadonly && input.value === ""
                ? input.fallbackValue
                : input.placeholder
            }
            value={input.value}
            onChange={input.onChange}
            autoComplete={input.autoComplete}
            required={input.isRequired}
            readOnly={input.isReadonly}
            disabled={input.isDisabled}
            rows={input.rows}
            minLength={input.minLength}
            maxLength={input.maxLength}
          />
        );
      default:
        return null;
    }
  };

  useMousedown((event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setSelectOpen(false);
    }
  }, []);

  useResize(() => {
    if (selectOpen && optionsRef.current && ref.current) {
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
  }, [selectOpen]);

  return (
    <ISInput
      id={input.id}
      baseColor={input.baseColor}
      primaryColor={input.primaryColor}
      secondaryColor={input.secondaryColor}
      className={s.inputBody}
    >
      <label
        htmlFor={input.id}
        className={`${s.inputLabel} ${
          input.isLabeled && input.labelText ? "" : s.none
        }`}
      >
        {`${input.labelText} ${input.isRequired ? "*" : ""}`}
      </label>
      <div
        className={`${s.inputField} ${input.errorContent ? s.error : ""} ${
          input.isReadonly ? s.readonly : ""
        } ${input.isDisabled ? s.disabled : ""} ${
          input.variant !== "textarea" ? s.plain : ""
        } ${input.variant !== "select" ? s.inputVariant : ""}`}
        ref={input.variant === "select" ? ref : undefined}
        style={getInputStyles(input.radius)}
      >
        {input.startContent && (
          <div className={`${s.inputIcon} ${s.start}`}>
            {input.startContent}
          </div>
        )}
        {renderVariant()}
        {input.variant === "input" && input.type === "password" && (
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
                color={input.secondaryColor}
              />
            ) : (
              <ISEyeOpen
                width="100%"
                height="100%"
                color={input.secondaryColor}
              />
            )}
          </div>
        )}
        {input.variant === "select" && (
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
              color={input.secondaryColor}
            />
          </div>
        )}
        {input.variant === "input" &&
          input.type !== "password" &&
          input.endContent && (
            <div className={`${s.inputIcon} ${s.end}`}>{input.endContent}</div>
          )}
      </div>
      {input.errorContent && (
        <h6 className={s.inputInfoText} style={{ color: "#FF6347" }}>
          {input.errorContent}
        </h6>
      )}
      {input.infoContent && (
        <h6 className={s.inputInfoText} style={{ color: input.primaryColor }}>
          {input.infoContent}
        </h6>
      )}
    </ISInput>
  );
};

export default Input;

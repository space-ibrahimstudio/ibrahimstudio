import React, { useState } from "react";
import { ISInput } from "@ibrahimstudio/jsx";
import { ISChevron, ISEyeOpen, ISEyeSlash } from "@ibrahimstudio/icons";
import { getInputStyles } from "@ibrahimstudio/styles";
import s from "./input.module.css";

interface Option {
  value: string | number;
  label: string;
}

interface InputProps {
  id: string;
  formId?: string;
  variant?: "input" | "textarea" | "select";
  labelText: string;
  baseColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  name: string;
  placeholder?: string;
  type:
    | "date"
    | "datetime-local"
    | "email"
    | "number"
    | "password"
    | "text"
    | "tel"
    | "time"
    | "url";
  min?: number | string;
  max?: number | string;
  minLength?: number;
  maxLength?: number;
  cols?: number;
  rows?: number;
  value: string | number;
  fallbackValue?: string;
  options: Option[];
  autoComplete?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSelect: (value: string | number) => void;
  isLabeled: boolean;
  isRequired?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  errorContent?: string;
  infoContent?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id = "ibrahimstudio-input-id",
  formId = "ibrahimstudio-form-id",
  variant = "input",
  labelText = "Input Label",
  baseColor = "var(--theme-color-base)",
  primaryColor = "var(--theme-color-primary)",
  secondaryColor = "var(--theme-color-secondary)",
  radius = "md",
  name,
  placeholder = "Input Placeholder",
  type = "text",
  min,
  max,
  minLength,
  maxLength,
  cols,
  rows = 3,
  value,
  fallbackValue,
  options,
  autoComplete,
  onChange,
  onSelect,
  isLabeled = true,
  isRequired = false,
  isReadonly = false,
  isDisabled = false,
  isSearchable = false,
  errorContent,
  infoContent,
  startContent,
  endContent,
}) => {
  const [passwordSeen, setPasswordSeen] = React.useState<boolean>(false);
  const [selectOpen, setSelectOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string | number>(
    value
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const ref = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const togglePasswordSeen = () => {
    setPasswordSeen(!passwordSeen);
  };

  const filteredOptions =
    searchTerm.length > 0
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    onSelect(e.target.value);
  };

  const handleOptionClick = (optionValue: string | number) => {
    setSelectedOption(optionValue);
    onSelect(optionValue);
    setSelectOpen(false);
  };

  const renderVariant = () => {
    switch (variant) {
      case "input":
        return (
          <input
            id={id}
            form={formId}
            className={s.inputFieldInput}
            type={
              type === "password" ? (passwordSeen ? "text" : "password") : type
            }
            name={name}
            placeholder={
              isReadonly && value === "" ? fallbackValue : placeholder
            }
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
            disabled={isDisabled}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
          />
        );
      case "select":
        return (
          <React.Fragment>
            <input
              id={id}
              form={formId}
              className={`${s.inputFieldInput} ${
                variant === "select" ? s.select : ""
              }`}
              name={name}
              value={
                selectedOption === ""
                  ? placeholder
                  : options.find((option) => option.value === selectedOption)
                      ?.label || placeholder
              }
              onChange={handleSelectChange}
              required={isRequired}
              readOnly={true}
              disabled={isDisabled}
              onClick={() => setSelectOpen(!selectOpen)}
            />
            {selectOpen && (
              <div
                className={`${s.optionsContainer} ${
                  selectOpen ? s.opened : s.closed
                }`}
                ref={optionsRef}
              >
                {isSearchable ? (
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
                    <b className={s.optionText}>{placeholder}</b>
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
            id={id}
            form={formId}
            className={s.inputFieldInput}
            name={name}
            placeholder={
              isReadonly && value === "" ? fallbackValue : placeholder
            }
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
            disabled={isDisabled}
            cols={cols}
            rows={rows}
            minLength={minLength}
            maxLength={maxLength}
          />
        );
      default:
        return (
          <input
            id={id}
            form={formId}
            className={s.inputFieldInput}
            type={
              type === "password" ? (passwordSeen ? "text" : "password") : type
            }
            name={name}
            placeholder={
              isReadonly && value === "" ? fallbackValue : placeholder
            }
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
            disabled={isDisabled}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
          />
        );
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
    const handleResize = () => {
      if (selectOpen && optionsRef.current && ref.current) {
        const dropdownRect = optionsRef.current.getBoundingClientRect();
        const buttonRect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (dropdownRect.bottom > windowHeight) {
          optionsRef.current.style.maxHeight = `${
            windowHeight - buttonRect.bottom
          }px`;
          optionsRef.current.style.overflowY = "auto";
        } else if (dropdownRect.top < 0) {
          optionsRef.current.style.maxHeight = `${buttonRect.top}px`;
          optionsRef.current.style.overflowY = "auto";
        }
      }
    };

    if (selectOpen) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectOpen]);

  return (
    <ISInput
      id={id}
      baseColor={baseColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      className={s.inputBody}
    >
      <label
        htmlFor={id}
        className={`${s.inputLabel} ${isLabeled && labelText ? "" : s.none}`}
      >
        {`${labelText} ${isRequired ? "*" : ""}`}
      </label>
      <div
        className={`${s.inputField} ${errorContent ? s.error : ""} ${
          isReadonly ? s.readonly : ""
        } ${isDisabled ? s.disabled : ""} ${
          variant !== "textarea" ? s.plain : ""
        } ${variant !== "select" ? s.inputVariant : ""}`}
        ref={variant === "select" ? ref : undefined}
        style={getInputStyles(radius)}
      >
        {startContent && (
          <div className={`${s.inputIcon} ${s.start}`}>{startContent}</div>
        )}
        {renderVariant()}
        {type === "password" &&
          variant !== "select" &&
          variant !== "textarea" && (
            <div
              className={`${s.inputIcon} ${s.password}`}
              onClick={togglePasswordSeen}
              aria-label={passwordSeen ? "Hide Password" : "Show Password"}
              role="button"
              tabIndex={0}
            >
              {passwordSeen ? (
                <ISEyeSlash width="100%" height="100%" color={secondaryColor} />
              ) : (
                <ISEyeOpen width="100%" height="100%" color={secondaryColor} />
              )}
            </div>
          )}
        {variant === "select" && (
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
              color={secondaryColor}
            />
          </div>
        )}
        {type !== "password" && variant !== "select" && endContent && (
          <div className={`${s.inputIcon} ${s.end}`}>{endContent}</div>
        )}
      </div>
      {errorContent && (
        <h6 className={s.inputInfoText} style={{ color: "#FF6347" }}>
          {errorContent}
        </h6>
      )}
      {infoContent && (
        <h6 className={s.inputInfoText} style={{ color: primaryColor }}>
          {infoContent}
        </h6>
      )}
    </ISInput>
  );
};

export default Input;

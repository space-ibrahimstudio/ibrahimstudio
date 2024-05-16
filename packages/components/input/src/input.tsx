import React from "react";
import { InputProps, baseDefault, plainDefault, selectDefault } from "./types";
import { Button } from "@ibrahimstudio/button";
import { useMousedown, useResize, useHandler } from "@ibrahimstudio/hooks";
import { ISChevron, ISEyeOpen, ISEyeSlash, ISUpload, ISCheck, ISTrash } from "@ibrahimstudio/icons";
import { CustomCSSProperties, getInputStyles, getMonochromeColor } from "@ibrahimstudio/styles";
import s from "./input.module.css";

const Input: React.FC<InputProps> = (props) => {
  const input = { ...baseDefault, ...plainDefault, ...selectDefault, ...props };
  const [passwordSeen, setPasswordSeen] = React.useState<boolean>(false);
  const [selectOpen, setSelectOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [optionsPosition, setOptionsPosition] = React.useState<"above" | "below">("below");
  const [selectedOption, setSelectedOption] =
    input.variant === "input" ? React.useState<string | number>(input.value) : React.useState<string | number>("");
  const [imagePreview, setImagePreview] =
    input.variant === "upload" ? React.useState<string | null>(input.initialFile) : React.useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const inputCSSProperties: CustomCSSProperties = {
    "--ibst-color-base": input.baseColor,
    "--ibst-color-base-10": getMonochromeColor(input.baseColor, 0.1),
    "--ibst-color-base-50": getMonochromeColor(input.baseColor, 0.5),
    "--ibst-color-primary": input.primaryColor,
    "--ibst-color-primary-5": getMonochromeColor(input.primaryColor, 0.05),
    "--ibst-color-primary-20": getMonochromeColor(input.primaryColor, 0.2),
    "--ibst-color-secondary": input.secondaryColor,
    "--ibst-color-secondary-5": getMonochromeColor(input.secondaryColor, 0.05),
    "--ibst-color-secondary-15": getMonochromeColor(input.secondaryColor, 0.15),
    "--ibst-color-secondary-50": getMonochromeColor(input.secondaryColor, 0.5),
  };

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
            type={input.type === "password" ? (passwordSeen ? "text" : "password") : input.type}
            name={input.name}
            placeholder={input.isReadonly && input.value === "" ? input.fallbackValue : input.placeholder}
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
          searchTerm.length > 0 ? input.options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())) : input.options;

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
              className={`${s.inputFieldInput} ${input.variant === "select" ? s.select : ""}`}
              name={input.name}
              value={
                selectedOption === ""
                  ? input.placeholder
                  : input.options.find((option) => option.value === selectedOption)?.label || input.placeholder
              }
              onChange={handleSelectChange}
              required={input.isRequired}
              readOnly={true}
              disabled={input.isDisabled}
              onClick={() => setSelectOpen(!selectOpen)}
            />
            {selectOpen && (
              <div
                className={`${s.optionsContainer} ${selectOpen ? s.opened : s.closed} ${optionsPosition === "above" ? s.above : s.below}`}
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
                    className={`${s.option} ${selectedOption === "" ? s.selected : ""}`}
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
                    className={`${s.option} ${selectedOption === option.value ? s.selected : ""}`}
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
            placeholder={input.isReadonly && input.value === "" ? input.fallbackValue : input.placeholder}
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
      case "upload":
        const fallbackimg = "https://raw.githubusercontent.com/space-ibrahimstudio/ibrahimstudio/master/public/image/fallback.jpg";
        const imgsrc = imagePreview ? (imagePreview !== "" ? imagePreview : fallbackimg) : fallbackimg;
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            if (input.maxSize && file.size > input.maxSize) {
              input.errorContent = `File size exceeds the maximum limit of ${input.maxSize / (1024 * 1024)} MB`;
              if (inputFileRef.current) {
                inputFileRef.current.value = "";
              }
              setImagePreview(null);
              input.onSelect(null);
            } else {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImagePreview(reader.result as string);
                input.onSelect(file);
              };
              reader.readAsDataURL(file);
            }
          }
        };

        const triggerFileUpload = () => {
          if (inputFileRef.current) {
            inputFileRef.current.click();
          }
        };

        const clearImage = () => {
          setImagePreview(null);
          input.onSelect(null);
          if (inputFileRef.current) {
            inputFileRef.current.value = "";
          }
        };

        return (
          <React.Fragment>
            <div className={s.uploadBorder}>
              {input.note && (
                <div className={s.uploadNote}>
                  <span className={s.noteText}>{input.note}</span>
                </div>
              )}
              <div className={s.uploadAction}>
                <Button
                  id={imagePreview ? `${input.id}-replace` : `${input.id}-upload`}
                  type="button"
                  size="sm"
                  variant={imagePreview ? "line" : "fill"}
                  color={imagePreview ? "#fff" : "var(--ibst-color-base)"}
                  bgColor={imagePreview ? "transparent" : "var(--ibst-color-primary)"}
                  buttonText={imagePreview ? "Upload Another Image" : "Upload Image"}
                  startContent={imagePreview ? <ISCheck /> : <ISUpload />}
                  onClick={triggerFileUpload}
                />
                {imagePreview && (
                  <Button
                    id={`${input.id}-remove`}
                    type="button"
                    size="sm"
                    variant="line"
                    subVariant="icon"
                    color="#fff"
                    iconContent={<ISTrash />}
                    onClick={clearImage}
                  />
                )}
              </div>
              <input
                id={`${input.id}-input`}
                ref={inputFileRef}
                className={s.uploadInput}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <img className={s.uploadImage} src={imgsrc} alt="Upload Image Preview" loading="lazy" />
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  useHandler(() => {
    if (input.variant === "upload") {
      setImagePreview(input.initialFile);
    } else {
      setImagePreview(null);
    }
  }, [input.variant, input.variant === "upload" ? input.initialFile : null]);

  useMousedown((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node) && optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
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
    <section id={input.id} className={s.inputBody} style={inputCSSProperties}>
      <label htmlFor={input.id} className={`${s.inputLabel} ${input.isLabeled && input.labelText ? "" : s.none}`}>
        {`${input.labelText} ${input.isRequired ? "*" : ""}`}
      </label>
      <div
        className={`${s.inputField}
        ${input.errorContent ? s.error : ""} ${input.isReadonly ? s.readonly : ""}${input.isDisabled ? s.disabled : ""}
        ${input.variant !== "textarea" ? (input.variant !== "upload" ? s.plain : s.upload) : ""}
        ${input.variant !== "select" ? s.inputVariant : ""}`}
        ref={input.variant === "select" ? ref : undefined}
        style={getInputStyles(input.radius)}
      >
        {input.variant !== "upload" && input.startContent && <div className={`${s.inputIcon} ${s.start}`}>{input.startContent}</div>}
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
              <ISEyeSlash width="100%" height="100%" color={input.secondaryColor} />
            ) : (
              <ISEyeOpen width="100%" height="100%" color={input.secondaryColor} />
            )}
          </div>
        )}
        {input.variant === "select" && (
          <div
            className={`${s.inputIcon} ${s.select} ${selectOpen ? s.flipped : ""}`}
            aria-label={selectOpen ? "Close Option" : "Open Option"}
            tabIndex={0}
          >
            <ISChevron width="100%" height="100%" direction="down" color={input.secondaryColor} />
          </div>
        )}
        {input.variant === "input" && input.type !== "password" && input.endContent && (
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
    </section>
  );
};

export default Input;

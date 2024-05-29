import React from "react";
import { InputProps, baseDefault, plainDefault, selectDefault, uploadDefault } from "./types";
import { Button } from "@ibrahimstudio/button";
import { useMousedown, useResize, useHandler } from "@ibrahimstudio/hooks";
import { ISChevron, ISEyeOpen, ISEyeSlash, ISUpload, ISCheck, ISTrash, ISImgUpload } from "@ibrahimstudio/icons";
import { CustomCSSProperties, getInputStyles, getMonochromeColor } from "@ibrahimstudio/styles";
import s from "./input.module.css";

const Input: React.FC<InputProps> = (props) => {
  const input = { ...baseDefault, ...plainDefault, ...selectDefault, ...uploadDefault, ...props };
  const [passwordSeen, setPasswordSeen] = React.useState<boolean>(false);
  const [selectOpen, setSelectOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [optionsPosition, setOptionsPosition] = React.useState<"above" | "below">("below");
  const [selectedOption, setSelectedOption] =
    input.variant === "input" ? React.useState<string | number>(input.value) : React.useState<string | number>("");
  const [currentFile, setCurrentFile] =
    input.variant === "upload" && input.isPreview === false ? React.useState<File | null>(input.initialFile) : React.useState<File | null>(null);
  const [currentFileName, setCurrentFileName] = React.useState<string | null>(null);
  const [currentImage, setCurrentImage] =
    input.variant === "upload" && input.isPreview === true ? React.useState<string | null>(input.initialImage) : React.useState<string | null>(null);
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
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            if (input.maxSize && file.size > input.maxSize) {
              input.errorContent = `File size exceeds the maximum limit of ${input.maxSize / (1024 * 1024)} MB`;
              if (inputFileRef.current) {
                inputFileRef.current.value = "";
              }
              setCurrentFileName(null);
              setCurrentFile(null);
              input.onSelect(null);
            } else {
              setCurrentFileName(file.name);
              setCurrentFile(file);
              input.onSelect(file);
            }
          }
        };

        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            if (input.maxSize && file.size > input.maxSize) {
              input.errorContent = `File size exceeds the maximum limit of ${input.maxSize / (1024 * 1024)} MB`;
              if (inputFileRef.current) {
                inputFileRef.current.value = "";
              }
              setCurrentFileName(null);
              setCurrentImage(null);
              input.onSelect(null);
            } else {
              setCurrentFileName(file.name);
              const reader = new FileReader();
              reader.onloadend = () => {
                setCurrentImage(reader.result as string);
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

        const clearFile = (type: string) => {
          if (type === "image") {
            setCurrentImage(null);
          } else {
            setCurrentFile(null);
          }
          input.onSelect(null);
          if (inputFileRef.current) {
            inputFileRef.current.value = "";
          }
        };

        return (
          <React.Fragment>
            {input.isPreview === true && (
              <React.Fragment>
                <div className={`${s.uploadBorder} ${currentImage ? s.filled : ""}`}>
                  {!currentImage && <ISImgUpload size="var(--ibst-pixel-65)" color="var(--ibst-color-secondary-50)" />}
                  {input.note && (
                    <div className={s.uploadNote}>
                      <span className={s.noteText}>{input.note}</span>
                    </div>
                  )}
                  <div className={s.uploadAction}>
                    <Button
                      id={currentImage ? `${input.id}-replace` : `${input.id}-upload`}
                      type="button"
                      size="sm"
                      variant={currentImage ? "line" : "fill"}
                      color={currentImage ? "#ffffff" : "var(--ibst-color-base)"}
                      bgColor={currentImage ? "transparent" : "var(--ibst-color-primary)"}
                      buttonText={currentImage ? "Upload Another Image" : "Upload Image"}
                      startContent={currentImage ? <ISCheck /> : <ISUpload />}
                      onClick={triggerFileUpload}
                    />
                    {currentImage && (
                      <Button
                        id={`${input.id}-remove`}
                        type="button"
                        size="sm"
                        variant="line"
                        subVariant="icon"
                        color="#fff"
                        iconContent={<ISTrash />}
                        onClick={() => clearFile("image")}
                      />
                    )}
                  </div>
                  <input
                    id={`${input.id}-input`}
                    form={input.formId}
                    ref={inputFileRef}
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                    name={input.name}
                    onChange={handleImageChange}
                    required={input.isRequired}
                    readOnly={input.isReadonly}
                    disabled={input.isDisabled}
                  />
                </div>
                {currentImage && (
                  <React.Fragment>
                    <div className={s.overlayImage} />
                    <img className={s.uploadImage} src={currentImage} alt="Upload Image Preview" loading="lazy" />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
            {input.isPreview === false && (
              <React.Fragment>
                <div className={`${s.inputIcon} ${s.start}`} style={{ cursor: "pointer" }}>
                  {currentFile ? <ISCheck color="var(--ibst-color-primary)" /> : <ISUpload color="var(--ibst-color-primary)" />}
                </div>
                <div className={`${s.inputFieldInput} ${input.variant === "upload" ? s.upload : ""}`} onClick={triggerFileUpload}>
                  {currentFile ? (
                    <p className={s.inputFieldUpload}>
                      <span>{`Selected file: `}</span>
                      <span style={{ color: "var(--ibst-color-primary)" }}>{currentFileName}</span>
                    </p>
                  ) : (
                    <p className={s.inputFieldUpload}>Upload File</p>
                  )}
                </div>
                <input
                  id={input.id}
                  form={input.formId}
                  ref={inputFileRef}
                  style={{ display: "none" }}
                  type="file"
                  accept={input.accept}
                  name={input.name}
                  onChange={handleFileChange}
                  required={input.isRequired}
                  readOnly={input.isReadonly}
                  disabled={input.isDisabled}
                />
                {currentFile && (
                  <div className={`${s.inputIcon} ${s.end}`} style={{ cursor: "pointer" }} onClick={() => clearFile("file")}>
                    <ISTrash color="#FF6347" />
                  </div>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  useHandler(() => {
    if (input.variant === "upload") {
      if (input.isPreview === true) {
        setCurrentImage(input.initialImage);
      } else if (input.isPreview === false) {
        setCurrentFile(input.initialFile);
      }
    } else {
      setCurrentImage(null);
      setCurrentFile(null);
    }
  }, [
    input.variant,
    input.variant === "upload" && input.isPreview === true ? input.initialImage : null,
    input.variant === "upload" && input.isPreview === false ? input.initialFile : null,
  ]);

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
    <section
      id={input.id}
      className={`${s.inputBody} ${input.errorContent ? s.error : ""} ${input.isReadonly ? s.readonly : ""} ${input.isDisabled ? s.disabled : ""}`}
      style={inputCSSProperties}
    >
      <label htmlFor={input.id} className={`${s.inputLabel} ${input.isLabeled && input.labelText ? "" : s.none}`}>
        <span>{input.labelText}</span>
        {input.isRequired && <span style={{ color: "#FF6347" }}>{` *`}</span>}
      </label>
      <div
        className={`${s.inputField}
        ${input.errorContent ? s.error : ""} ${input.isReadonly ? s.readonly : ""} ${input.isDisabled ? s.disabled : ""}
        ${
          input.variant !== "textarea"
            ? input.variant !== "upload"
              ? s.plain
              : input.variant === "upload" && input.isPreview === true
              ? s.upload
              : s.plain
            : ""
        }
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

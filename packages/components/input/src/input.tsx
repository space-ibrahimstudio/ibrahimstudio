import React from "react";
import s from "./input.module.css";

interface IconProps {
  width: string;
  height: string;
  color?: string;
}

const EyeOpen: React.FC<IconProps> = ({ width, height, color }) => {
  const fill = color || "currentColor";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="eye-open">
        <g id="Union">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4998 5.62243C8.55496 5.62243 7.64883 5.97848 6.98073 6.61225C6.31263 7.24602 5.9373 8.10559 5.9373 9.00188C5.9373 9.89816 6.31263 10.7577 6.98073 11.3915C7.64883 12.0253 8.55496 12.3813 9.4998 12.3813C10.4446 12.3813 11.3508 12.0253 12.0189 11.3915C12.687 10.7577 13.0623 9.89816 13.0623 9.00188C13.0623 8.10559 12.687 7.24602 12.0189 6.61225C11.3508 5.97848 10.4446 5.62243 9.4998 5.62243ZM8.24027 7.80706C8.57431 7.49018 9.02738 7.31216 9.4998 7.31216C9.97222 7.31216 10.4253 7.49018 10.7593 7.80706C11.0934 8.12395 11.281 8.55374 11.281 9.00188C11.281 9.45002 11.0934 9.87981 10.7593 10.1967C10.4253 10.5136 9.97222 10.6916 9.4998 10.6916C9.02738 10.6916 8.57431 10.5136 8.24027 10.1967C7.90622 9.87981 7.71855 9.45002 7.71855 9.00188C7.71855 8.55374 7.90622 8.12395 8.24027 7.80706Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 1.11646C5.90614 1.11646 3.51288 2.75886 2.04472 4.53845C1.31653 5.42111 0.812586 6.33923 0.489055 7.11609C0.177286 7.86471 0 8.56244 0 9.00183C0 9.44122 0.177286 10.139 0.489055 10.8876C0.812586 11.6644 1.31653 12.5826 2.04472 13.4652C3.51288 15.2448 5.90614 16.8872 9.5 16.8872C13.0939 16.8872 15.4871 15.2448 16.9553 13.4652C17.6835 12.5826 18.1874 11.6644 18.5109 10.8876C18.8227 10.139 19 9.44122 19 9.00183C19 8.56244 18.8227 7.86471 18.5109 7.11609C18.1874 6.33923 17.6835 5.42111 16.9553 4.53845C15.4871 2.75886 13.0939 1.11646 9.5 1.11646ZM1.78125 9.00183C1.78125 8.87798 1.86373 8.41403 2.14571 7.73694C2.41593 7.08809 2.83972 6.3165 3.44747 5.57984C4.65118 4.12079 6.56261 2.80618 9.5 2.80618C12.4374 2.80618 14.3488 4.12079 15.5525 5.57984C16.1603 6.3165 16.5841 7.08809 16.8543 7.73694C17.1363 8.41403 17.2188 8.87798 17.2188 9.00183C17.2188 9.12568 17.1363 9.58963 16.8543 10.2667C16.5841 10.9156 16.1603 11.6872 15.5525 12.4238C14.3488 13.8829 12.4374 15.1975 9.5 15.1975C6.56261 15.1975 4.65118 13.8829 3.44747 12.4238C2.83972 11.6872 2.41593 10.9156 2.14571 10.2667C1.86373 9.58963 1.78125 9.12568 1.78125 9.00183Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

const EyeSlash: React.FC<IconProps> = ({ width, height, color }) => {
  const fill = color || "currentColor";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="eye-slash">
        <g id="Union">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7391 0.247454C19.087 0.577393 19.087 1.11233 18.7391 1.44227L1.52039 17.7763C1.17258 18.1062 0.608669 18.1062 0.260858 17.7763C-0.0869526 17.4463 -0.0869526 16.9114 0.260858 16.5814L2.7377 14.2319C1.77928 13.2901 1.11578 12.2427 0.685219 11.3368C0.239844 10.3997 0 9.51955 0 9.01176C0 8.57237 0.177286 7.87464 0.489055 7.12602C0.812586 6.34916 1.31653 5.43104 2.04472 4.54838C3.51288 2.76879 5.90614 1.12639 9.5 1.12639C11.7347 1.12639 13.5188 1.76314 14.9066 2.68829L17.4796 0.247454C17.8274 -0.0824847 18.3913 -0.0824847 18.7391 0.247454ZM6.43103 10.7283L3.99747 13.0368C3.22037 12.2672 2.67011 11.402 2.30906 10.6423C1.90478 9.79171 1.78125 9.1686 1.78125 9.01176C1.78125 8.88791 1.86373 8.42396 2.14571 7.74687C2.41593 7.09803 2.83972 6.32643 3.44747 5.58977C4.65118 4.13072 6.56261 2.81611 9.5 2.81611C11.2096 2.81611 12.5593 3.2597 13.6232 3.90574L11.3093 6.10073C10.7656 5.79667 10.1417 5.63236 9.49981 5.63236C8.55498 5.63236 7.64884 5.98841 6.98074 6.62219C6.31263 7.25596 5.9373 8.11554 5.9373 9.01182C5.9373 9.62069 6.1105 10.2126 6.43103 10.7283ZM7.77929 9.44934L9.96103 7.37971C9.81187 7.34177 9.65691 7.32209 9.49981 7.32209C9.02739 7.32209 8.57432 7.50011 8.24027 7.817C7.90622 8.13389 7.71855 8.56368 7.71855 9.01182C7.71855 9.16085 7.7393 9.30785 7.77929 9.44934Z"
            fill={fill}
          />
          <path
            d="M18.1671 6.38749C17.9509 5.96839 17.4175 5.79492 16.9757 6.00005C16.5339 6.20517 16.351 6.7112 16.5672 7.1303C16.8064 7.59377 16.9734 8.02044 17.0792 8.3645C17.1907 8.72668 17.2188 8.94707 17.2188 9.01186C17.2188 9.13571 17.1363 9.59966 16.8543 10.2767C16.5841 10.9256 16.1603 11.6972 15.5525 12.4339C14.3488 13.8929 12.4374 15.2075 9.5 15.2075L9.49522 15.2075C8.77247 15.2112 8.05242 15.1238 7.35395 14.9475C6.8786 14.8276 6.39075 15.0959 6.26431 15.5468C6.13786 15.9977 6.4207 16.4605 6.89605 16.5805C7.74622 16.795 8.62264 16.9015 9.50235 16.8972C13.0949 16.8965 15.4874 15.2544 16.9553 13.4752C17.6835 12.5926 18.1874 11.6745 18.5109 10.8976C18.8227 10.149 19 9.45125 19 9.01186C19 8.71054 18.9183 8.3108 18.7892 7.8912C18.6546 7.45349 18.4505 6.93672 18.1671 6.38749Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

const ChevronDown: React.FC<IconProps> = ({ width, height, color }) => {
  const fill = color || "currentColor";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="chevron-down-icon"
        d="M1.44378 0.609712C1.11354 0.27891 0.578072 0.278851 0.247768 0.609581C-0.0825368 0.940311 -0.0825974 1.47659 0.247635 1.80739L5.40193 6.97057C5.56054 7.12945 5.77567 7.21871 6 7.21871C6.22433 7.21871 6.43946 7.12945 6.59807 6.97057L11.7524 1.80739C12.0826 1.47659 12.0825 0.940311 11.7522 0.609581C11.4219 0.278851 10.8865 0.27891 10.5562 0.609712L6 5.1738L1.44378 0.609712Z"
        fill={fill}
      />
    </svg>
  );
};

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
  minLength?: number;
  maxLength?: number;
  cols?: number;
  rows?: number;
  value: string | number;
  options: Option[];
  autoComplete?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSelect: (value: string | number) => void;
  isLabeled: boolean;
  isRequired?: boolean;
  isReadonly?: boolean;
  errorContent?: string;
  infoContent?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

interface CustomCSSProperties extends React.CSSProperties {
  "--ibst-color-base"?: string;
  "--ibst-color-primary"?: string;
  "--ibst-color-primary-5"?: string;
  "--ibst-color-primary-20"?: string;
  "--ibst-color-secondary"?: string;
  "--ibst-color-secondary-5"?: string;
  "--ibst-color-secondary-15"?: string;
  "--ibst-color-secondary-50"?: string;
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
  minLength,
  maxLength,
  cols,
  rows = 3,
  value,
  options,
  autoComplete,
  onChange,
  onSelect,
  isLabeled = true,
  isRequired = false,
  isReadonly = false,
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
  const ref = React.useRef<HTMLDivElement>(null);

  const togglePasswordSeen = () => {
    setPasswordSeen(!passwordSeen);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    onSelect(e.target.value);
  };

  const handleOptionClick = (optionValue: string | number) => {
    setSelectedOption(optionValue);
    onSelect(optionValue);
    setSelectOpen(false);
  };

  const getInputStyles = () => {
    let borderRadius: string;

    switch (radius) {
      case "none":
        borderRadius = "0";
        break;
      case "sm":
        borderRadius = "var(--ibst-radius-5)";
        break;
      case "md":
        borderRadius = "var(--ibst-radius-10)";
        break;
      case "lg":
        borderRadius = "var(--ibst-radius-15)";
        break;
      case "full":
        borderRadius = "var(--ibst-radius-full)";
        break;
      default:
        borderRadius = "var(--ibst-radius-10)";
        break;
    }

    return {
      borderRadius,
    };
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
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
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
                options.find((option) => option.value === selectedOption)
                  ?.label || placeholder
              }
              onChange={handleSelectChange}
              required={isRequired}
              onClick={() => setSelectOpen(!selectOpen)}
              readOnly
            />
            {selectOpen && (
              <div
                className={`${s.optionsContainer} ${
                  selectOpen ? s.opened : s.closed
                }`}
              >
                {options.map((option) => (
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
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
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
            className={s.inputFieldInput}
            type={
              type === "password" ? (passwordSeen ? "text" : "password") : type
            }
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={isRequired}
            readOnly={isReadonly}
            minLength={minLength}
            maxLength={maxLength}
          />
        );
    }
  };

  const adjustOpacity = (color: string, opacity: number): string => {
    if (color.startsWith("#")) {
      const hex = color.slice(1);
      const rgb = parseInt(hex, 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = rgb & 0xff;

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith("rgba")) {
      const rgbaMatch = color.match(
        /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/
      );

      if (rgbaMatch) {
        const [, r, g, b, a] = rgbaMatch.map(parseFloat);
        return `rgba(${r}, ${g}, ${b}, ${a * opacity})`;
      }
    } else if (color.startsWith("var")) {
      const cssVarMatch = color.match(/var\(--(.+?)\)/);

      if (cssVarMatch) {
        const [, varName] = cssVarMatch;
        const computedColor = getComputedStyle(document.documentElement)
          .getPropertyValue(`--${varName}`)
          .trim();
        return adjustOpacity(computedColor, opacity);
      }
    }

    return color;
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={s.inputBody}
      style={
        {
          "--ibst-color-base": baseColor,
          "--ibst-color-primary": primaryColor,
          "--ibst-color-primary-5": adjustOpacity(primaryColor, 0.05),
          "--ibst-color-primary-20": adjustOpacity(primaryColor, 0.2),
          "--ibst-color-secondary": secondaryColor,
          "--ibst-color-secondary-5": adjustOpacity(secondaryColor, 0.05),
          "--ibst-color-secondary-15": adjustOpacity(secondaryColor, 0.15),
          "--ibst-color-secondary-50": adjustOpacity(secondaryColor, 0.5),
        } as CustomCSSProperties
      }
    >
      {isLabeled && labelText ? (
        <label htmlFor={id} className={s.inputLabel}>
          {isRequired ? (
            <React.Fragment>
              <span>{labelText}</span>
              <span style={{ color: "#FF6347" }}>*</span>
            </React.Fragment>
          ) : (
            labelText
          )}
        </label>
      ) : (
        <label
          htmlFor={id}
          className={s.inputLabel}
          style={{ display: "none" }}
        ></label>
      )}
      <div
        className={`${s.inputField} ${errorContent ? s.error : ""} ${
          isReadonly ? s.readonly : ""
        } ${variant !== "textarea" ? s.plain : ""} ${
          variant !== "select" ? s.inputVariant : ""
        }`}
        ref={variant === "select" ? ref : undefined}
        style={getInputStyles()}
      >
        {startContent && (
          <div
            className={s.InputContentWrap}
            style={{ marginLeft: "var(--ibst-pixel-15)" }}
          >
            {startContent}
          </div>
        )}
        {renderVariant()}
        {type === "password" &&
          variant !== "select" &&
          variant !== "textarea" && (
            <div
              className={s.InputContentWrap}
              style={{
                marginRight: "var(--ibst-pixel-15)",
                cursor: "pointer",
                width: "var(--ibst-pixel-20)",
                height: "var(--ibst-pixel-20)",
              }}
              onClick={togglePasswordSeen}
              aria-label={passwordSeen ? "Hide Password" : "Show Password"}
              role="button"
              tabIndex={0}
            >
              {passwordSeen ? (
                <EyeSlash width="100%" height="100%" color={primaryColor} />
              ) : (
                <EyeOpen width="100%" height="100%" color={primaryColor} />
              )}
            </div>
          )}
        {variant === "select" && (
          <div
            className={`${s.InputContentWrap} ${selectOpen ? s.flipped : ""}`}
            style={{
              marginRight: "var(--ibst-pixel-15)",
              width: "var(--ibst-pixel-15)",
              height: "var(--ibst-pixel-15)",
            }}
            aria-label={selectOpen ? "Close Option" : "Open Option"}
            tabIndex={0}
          >
            <ChevronDown width="100%" height="100%" color={primaryColor} />
          </div>
        )}
        {type !== "password" && variant !== "select" && endContent && (
          <div
            className={s.InputContentWrap}
            style={{ marginRight: "var(--ibst-pixel-15)" }}
          >
            {endContent}
          </div>
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
    </div>
  );
};

export default Input;

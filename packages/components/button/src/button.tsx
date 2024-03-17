import React, { useState } from "react";
import s from "./button.module.css";

interface ButtonProps {
  size?: string;
  type?: string;
  variant?: string;
  radius?: string;
  color?: string;
  bgColor?: string;
  buttonText: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  type,
  variant,
  radius,
  color = "var(--color-button-text)",
  bgColor = "var(--color-button)",
  buttonText,
  startContent,
  endContent,
  onClick,
}) => {
  const [ripple, setRipple] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  }>();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const left = event.clientX - buttonRect.left - size / 2;
    const top = event.clientY - buttonRect.top - size / 2;
    setRipple({ left, top, width: size, height: size });

    onClick();
  };

  const handleSubmitClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const left = event.clientX - buttonRect.left - size / 2;
    const top = event.clientY - buttonRect.top - size / 2;
    setRipple({ left, top, width: size, height: size });
  };

  let buttonColor: string;
  let backgroundColor: string;
  let border: string;
  let borderRadius: string;

  switch (variant) {
    case "fill":
      buttonColor = color;
      backgroundColor = bgColor;
      border = `1px solid ${bgColor}`;
      break;
    case "hollow":
      buttonColor = bgColor;
      backgroundColor = "transparent";
      border = "1px solid transparent";
      break;
    case "line":
      buttonColor = bgColor;
      backgroundColor = "transparent";
      border = `1px solid ${bgColor}`;
      break;
    default:
      buttonColor = color;
      backgroundColor = bgColor;
      border = `1px solid ${bgColor}`;
      break;
  }

  switch (radius) {
    case "none":
      borderRadius = "0";
      break;
    case "sm":
      borderRadius = "var(--ibst-pixel-5)";
      break;
    case "md":
      borderRadius = "var(--ibst-pixel-10)";
      break;
    case "lg":
      borderRadius = "var(--ibst-pixel-15)";
      break;
    case "full":
      borderRadius = "var(--ibst-pixel-full)";
      break;
    default:
      borderRadius = "0";
      break;
  }

  if (type === "submit") {
    if (size === "small") {
      return (
        <button
          className={s.button}
          style={{
            borderRadius,
            color: buttonColor,
            backgroundColor,
            border,
            height: "var(--ibst-pixel-40)",
          }}
          type="submit"
          onClick={handleSubmitClick}
        >
          {startContent}
          <div className={s.buttonText}>{buttonText}</div>
          {endContent}
          {ripple && (
            <span
              className={s.buttonRipple}
              style={{
                left: ripple.left,
                top: ripple.top,
                width: ripple.width,
                height: ripple.height,
              }}
            />
          )}
          <div className={s.buttonBlock}></div>
        </button>
      );
    } else {
      return (
        <button
          className={s.button}
          style={{
            borderRadius,
            color: buttonColor,
            backgroundColor,
            border,
            height: "var(--ibst-pixel-50)",
          }}
          type="submit"
          onClick={handleSubmitClick}
        >
          {startContent}
          <div className={s.buttonText}>{buttonText}</div>
          {endContent}
          {ripple && (
            <span
              className={s.buttonRipple}
              style={{
                left: ripple.left,
                top: ripple.top,
                width: ripple.width,
                height: ripple.height,
              }}
            />
          )}
          <div className={s.buttonBlock}></div>
        </button>
      );
    }
  } else {
    if (size === "small") {
      return (
        <button
          className={s.button}
          style={{
            borderRadius,
            color: buttonColor,
            backgroundColor,
            border,
            height: "var(--ibst-pixel-40)",
          }}
          onClick={handleClick}
        >
          {startContent}
          <div className={s.buttonText}>{buttonText}</div>
          {endContent}
          {ripple && (
            <span
              className={s.buttonRipple}
              style={{
                left: ripple.left,
                top: ripple.top,
                width: ripple.width,
                height: ripple.height,
              }}
            />
          )}
          <div className={s.buttonBlock}></div>
        </button>
      );
    } else {
      return (
        <button
          className={s.button}
          style={{
            borderRadius,
            color: buttonColor,
            backgroundColor,
            border,
            height: "var(--ibst-pixel-50)",
          }}
          onClick={handleClick}
        >
          {startContent}
          <div className={s.buttonText}>{buttonText}</div>
          {endContent}
          {ripple && (
            <span
              className={s.buttonRipple}
              style={{
                left: ripple.left,
                top: ripple.top,
                width: ripple.width,
                height: ripple.height,
              }}
            />
          )}
          <div className={s.buttonBlock}></div>
        </button>
      );
    }
  }
};

export default Button;

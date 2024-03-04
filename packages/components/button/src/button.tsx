import React from "react";
import s from "./button.module.css";

interface ButtonProps {
  size?: string;
  variant?: string;
  radius?: string;
  color: string;
  bgColor: string;
  buttonText: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  radius,
  color,
  bgColor,
  buttonText,
  startContent,
  endContent,
  onClick,
}) => {
  let buttonColor: string;
  let backgroundColor: string;
  let border: string;
  let borderRadius: string;

  switch (variant) {
    case "hollow":
      buttonColor = color;
      backgroundColor = "transparent";
      border = "1px solid transparent";
      break;
    case "hollow-line":
      buttonColor = color;
      backgroundColor = "transparent";
      border = `1px solid ${color}`;
      break;
    default:
      buttonColor = color;
      backgroundColor = bgColor;
      border = `1px solid ${bgColor}`;
      break;
  }

  switch (radius) {
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
      borderRadius = "var(--ibst-pixel-100)";
      break;
    default:
      borderRadius = "0px";
      break;
  }

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
        onClick={onClick}
      >
        {startContent}
        <div className={s.buttonText}>{buttonText}</div>
        {endContent}
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
        onClick={onClick}
      >
        {startContent}
        <div className={s.buttonText}>{buttonText}</div>
        {endContent}
      </button>
    );
  }
};

export default Button;

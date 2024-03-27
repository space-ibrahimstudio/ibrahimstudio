import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./button.module.css";

interface ButtonProps {
  id: string;
  size?: "small" | "reg";
  type?: "button" | "submit" | "route";
  variant?: "fill" | "hollow" | "line";
  subVariant?: "reg" | "icon";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?: string;
  bgColor?: string;
  buttonText: string;
  isLoading?: boolean;
  iconContent?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  loadingContent?: React.ReactNode;
  onClick: () => void;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  id = "button-id",
  size = "small",
  type = "button",
  variant = "fill",
  subVariant = "reg",
  radius = "md",
  color = "var(--color-button-text)",
  bgColor = "var(--color-button)",
  buttonText = "Click Me!",
  isLoading = false,
  iconContent,
  startContent,
  endContent,
  loadingContent,
  onClick,
  to,
}) => {
  const navigate = useNavigate();
  const [ripple, setRipple] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  }>();

  const handleRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = event.currentTarget;
    setTimeout(() => {
      const buttonRect = button.getBoundingClientRect();
      const size = Math.max(buttonRect.width, buttonRect.height);
      const left = event.clientX - buttonRect.left - size / 2;
      const top = event.clientY - buttonRect.top - size / 2;
      setRipple({ left, top, width: size, height: size });
    }, 0);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (type === "button") {
      handleRipple(event);
      onClick && onClick();
    } else if (type === "route" && to) {
      navigate(to);
    } else if (type === "submit") {
      handleRipple(event);
    } else {
      handleRipple(event);
      onClick && onClick();
    }
  };

  const getButtonStyles = () => {
    let buttonColor: string;
    let backgroundColor: string;
    let border: string;
    let borderRadius: string;
    let height: string;

    switch (variant) {
      case "fill":
        buttonColor = color;
        backgroundColor = bgColor;
        border = `1px solid ${bgColor}`;
        break;
      case "hollow":
        buttonColor = color;
        backgroundColor = "transparent";
        border = "1px solid transparent";
        break;
      case "line":
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

    switch (size) {
      case "reg":
        height = "var(--ibst-pixel-50)";
        break;
      case "small":
        height = "var(--ibst-pixel-40)";
        break;
      default:
        height = "var(--ibst-pixel-50)";
        break;
    }

    return {
      borderRadius,
      color: buttonColor,
      backgroundColor,
      border,
      height,
    };
  };

  return (
    <button
      id={id}
      className={s.button}
      style={getButtonStyles()}
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
    >
      {subVariant === "icon" ? (
        iconContent
      ) : (
        <React.Fragment>
          {startContent && !isLoading && startContent}
          {!isLoading ? (
            <div className={s.buttonText}>{buttonText}</div>
          ) : loadingContent ? (
            loadingContent
          ) : (
            <div className={s.buttonText}>Loading ...</div>
          )}
          {endContent && !isLoading && endContent}
        </React.Fragment>
      )}
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
};

export default Button;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  to: string;
}

const Button: React.FC<ButtonProps> = ({
  id = "button-id",
  size = "reg",
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
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  });
  const [isRippling, setIsRippling] = useState<boolean>(false);

  const handleRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (type === "button") {
      handleRipple(event);
      onClick && onClick();
    } else if (type === "route" && to) {
      handleRipple(event);
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

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <React.Fragment>
      {type === "route" && to ? (
        <Link id={id} className={s.button} style={getButtonStyles()} to={to}>
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
          {isRippling ? (
            <span
              className={s.buttonRipple}
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ""
          )}
          <div className={s.buttonBlock}></div>
        </Link>
      ) : (
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
          {isRippling ? (
            <span
              className={s.buttonRipple}
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ""
          )}
          <div className={s.buttonBlock}></div>
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;

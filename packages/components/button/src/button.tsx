import React from "react";
import { LoadingText, ISButton } from "@ibrahimstudio/jsx";
import { getButtonStyles, getContrastColor } from "@ibrahimstudio/styles";
import s from "./button.module.css";

interface ButtonProps {
  id: string;
  size?: "sm" | "reg";
  type?: "button" | "submit" | "route" | "link";
  variant?: "fill" | "hollow" | "line" | "dashed";
  subVariant?: "reg" | "icon";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?: string;
  bgColor?: string;
  buttonText: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isNewTab?: boolean;
  isFullwidth?: boolean;
  isTooltip?: boolean;
  tooltipText: string;
  iconContent?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  loadingContent?: React.ReactNode;
  onClick: () => void;
  to: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({
  id = "ibrahimstudio-default-id",
  size = "reg",
  type = "button",
  variant = "fill",
  subVariant = "reg",
  radius = "md",
  color = "var(--theme-color-base)",
  bgColor = "var(--theme-color-primary)",
  buttonText = "Click Me!",
  isLoading = false,
  isDisabled = false,
  isNewTab = true,
  isFullwidth = false,
  isTooltip = false,
  tooltipText = "Tooltip!",
  iconContent,
  startContent,
  endContent,
  loadingContent,
  onClick,
  to,
  href,
}) => {
  const [isRippling, setIsRippling] = React.useState<boolean>(false);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  });

  const handleRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isDisabled && !isLoading) {
      if (type === "button" && !to && !href) {
        handleRipple(event);
        onClick && onClick();
      } else if (
        (type === "route" && to) ||
        (type === "submit" && !to && !href && !onClick)
      ) {
        handleRipple(event);
      } else if (type === "link" && href && !to && !onClick) {
        handleRipple(event);
        if (!isNewTab) {
          window.location.href = href;
        } else {
          window.open(href, "_blank");
        }
      } else {
        handleRipple(event);
        onClick && onClick();
      }
    }
  };

  let blockBgColor: string;
  let rippleColor: string;

  if (variant === "hollow" || variant === "line" || variant === "dashed") {
    if (getContrastColor(color, -30) === color) {
      rippleColor = `rgba(255, 255, 255, 0.2)`;
      blockBgColor = `rgba(255, 255, 255, 0.1)`;
    } else {
      rippleColor = `rgba(0, 0, 0, 0.2)`;
      blockBgColor = `rgba(0, 0, 0, 0.1)`;
    }
  } else {
    if (getContrastColor(bgColor, -30) === bgColor) {
      rippleColor = `rgba(255, 255, 255, 0.2)`;
      blockBgColor = `rgba(255, 255, 255, 0.1)`;
    } else {
      rippleColor = `rgba(0, 0, 0, 0.2)`;
      blockBgColor = `rgba(0, 0, 0, 0.1)`;
    }
  }

  const fallbackLoading = (
    <React.Fragment>
      <div className={s.ringSpinner} style={{ borderTopColor: color }}></div>
      <b className={s.buttonText}>
        <LoadingText />
      </b>
    </React.Fragment>
  );

  React.useEffect(() => {
    const handleRippling = () => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
      } else {
        setIsRippling(false);
      }
    };

    handleRippling();
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  return (
    <ISButton
      id={id}
      type={
        type === "route" ? "route" : type === "submit" ? "submit" : "button"
      }
      className={`${s.button} ${isDisabled ? s.disabled : ""} ${
        isLoading ? s.loading : ""
      } ${isFullwidth ? s.full : ""}`}
      style={getButtonStyles(variant, radius, size, color, bgColor)}
      to={to}
      disabled={isLoading || isDisabled}
      onCLick={handleClick}
      isTooltip={isTooltip}
      tooltipText={tooltipText}
      isLoading={isLoading}
    >
      {subVariant === "icon" ? (
        <div className={s.buttonIcon}>{iconContent}</div>
      ) : (
        <React.Fragment>
          {startContent && !isLoading && (
            <div className={s.buttonIcon}>{startContent}</div>
          )}
          {isLoading ? (
            loadingContent ? (
              <div className={s.buttonIcon}>{loadingContent}</div>
            ) : (
              fallbackLoading
            )
          ) : (
            <b className={s.buttonText}>{buttonText}</b>
          )}
          {endContent && !isLoading && (
            <div className={s.buttonIcon}>{endContent}</div>
          )}
        </React.Fragment>
      )}
      {isRippling && (
        <span
          className={s.buttonRipple}
          style={{
            left: coords.x,
            top: coords.y,
            backgroundColor: rippleColor,
          }}
        />
      )}
      {!isDisabled && !isLoading && (
        <div
          className={s.buttonBlock}
          style={{ background: blockBgColor }}
        ></div>
      )}
    </ISButton>
  );
};

export default Button;

import React from "react";
import { LoadingText } from "@ibrahimstudio/contents";
import { getButtonStyles, getContrastColor } from "@ibrahimstudio/styles";
import { ISButton } from "@ibrahimstudio/tools";
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
  // button state
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  });
  const [isRippling, setIsRippling] = React.useState<boolean>(false);
  // tooltip states & refs
  const [hover, setHover] = React.useState<boolean>(false);
  const hoverTimeout = React.useRef<number | null>(null);
  const tooltipContentRef = React.useRef<HTMLDivElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  // ripple effect handler
  const handleRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };
  // click event handler
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
  };
  // calculate the background color
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
  // delay timer for tooltip
  const delay: number = 500;
  // mouse event handler for tooltip
  const handleMouseEnter = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setHover(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHover(false);
  };
  // render tooltip position
  const updateTooltipPosition = () => {
    if (tooltipContentRef.current && tooltipRef.current) {
      const rect = tooltipContentRef.current.getBoundingClientRect();

      const { top, left, right } = rect;
      const padding = 40;

      if (left < 0 + padding) {
        const newLeft = Math.abs(left) + padding;
        tooltipContentRef.current.style.left = `${newLeft}px`;
      } else if (right + padding > window.innerWidth) {
        const newRight = right + padding - window.innerWidth;
        tooltipContentRef.current.style.right = `${newRight}px`;
      }

      if (top < 0) {
        tooltipRef.current.style.top = "unset";
        tooltipRef.current.style.bottom = "0";
        tooltipRef.current.style.transform = "translateY(calc(100% + 10px))";
      }
    }
  };
  // effect to handle tooltip resizing
  React.useEffect(() => {
    const handleResize = () => {
      if (hover) {
        updateTooltipPosition();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hover]);
  // rippling effect for button
  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <React.Fragment>
      {isTooltip === true && isTooltip ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={s.container}
        >
          {hover && (
            <div ref={tooltipRef} className={s.tooltip}>
              <div ref={tooltipContentRef} className={s.tooltipContent}>
                <div className={s.tooltipContentText}>
                  {isLoading ? <LoadingText /> : tooltipText}
                </div>
              </div>
            </div>
          )}
          <ISButton
            id={id}
            type={
              type === "route"
                ? "route"
                : type === "submit"
                ? "submit"
                : "button"
            }
            className={`${s.button} ${isDisabled ? s.disabled : ""} ${
              isLoading ? s.loading : ""
            } ${isFullwidth ? s.full : ""}`}
            style={getButtonStyles(variant, radius, size, color, bgColor)}
            to={to}
            disabled={isLoading ? true : isDisabled}
            onCLick={handleClick}
          >
            {subVariant === "icon" ? (
              <div className={s.buttonIcon}>{iconContent}</div>
            ) : (
              <React.Fragment>
                {startContent && !isLoading && (
                  <div className={s.buttonIcon}>{startContent}</div>
                )}
                {!isLoading ? (
                  <div className={s.buttonText}>{buttonText}</div>
                ) : loadingContent ? (
                  <div className={s.buttonIcon}>{loadingContent}</div>
                ) : (
                  <React.Fragment>
                    <div
                      className={s.ringSpinner}
                      style={{ borderTopColor: color }}
                    ></div>
                    <div className={s.buttonText}>
                      <LoadingText />
                    </div>
                  </React.Fragment>
                )}
                {endContent && !isLoading && (
                  <div className={s.buttonIcon}>{endContent}</div>
                )}
              </React.Fragment>
            )}
            {isRippling && !isDisabled && !isLoading && (
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
        </div>
      ) : (
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
          disabled={isLoading ? true : isDisabled}
          onCLick={handleClick}
        >
          {subVariant === "icon" ? (
            <div
              style={{
                zIndex: "3",
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {iconContent}
            </div>
          ) : (
            <React.Fragment>
              {startContent && !isLoading && (
                <div
                  style={{
                    zIndex: "3",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {startContent}
                </div>
              )}
              {!isLoading ? (
                <div className={s.buttonText}>{buttonText}</div>
              ) : loadingContent ? (
                <div
                  style={{
                    zIndex: "3",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {loadingContent}
                </div>
              ) : (
                <React.Fragment>
                  <div
                    className={s.ringSpinner}
                    style={{ borderTopColor: color }}
                  ></div>
                  <div className={s.buttonText}>
                    <LoadingText />
                  </div>
                </React.Fragment>
              )}
              {endContent && !isLoading && (
                <div
                  style={{
                    zIndex: "3",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {endContent}
                </div>
              )}
            </React.Fragment>
          )}
          {isRippling && !isDisabled && !isLoading && (
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
      )}
    </React.Fragment>
  );
};

export default Button;

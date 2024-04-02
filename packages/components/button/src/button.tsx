import React from "react";
import { Link } from "react-router-dom";
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
  color = "var(--color-button-text)",
  bgColor = "var(--color-button)",
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
    if (type === "button" && !to) {
      handleRipple(event);
      onClick && onClick();
    } else if (type === "route" && to) {
      handleRipple(event);
    } else if (type === "submit") {
      handleRipple(event);
    } else if (type === "link" && href) {
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

  const loadingText = () => {
    return (
      <React.Fragment>
        <span>{`Loading `}</span>
        <span className={s.dot1}>.</span>
        <span className={s.dot2}>.</span>
        <span className={s.dot3}>.</span>
      </React.Fragment>
    );
  };
  // dynamic button style
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
        buttonColor = color || bgColor;
        backgroundColor = "transparent";
        border = "1px solid transparent";
        break;
      case "line":
        buttonColor = color || bgColor;
        backgroundColor = "transparent";
        border = `1px solid ${color || bgColor}`;
        break;
      case "dashed":
        buttonColor = color || bgColor;
        backgroundColor = "transparent";
        border = `1px dashed ${color || bgColor}`;
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
      case "sm":
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
  // function to darken or lighten a color
  const handleContrastColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
        (G < 255 ? (G < 1 ? 0 : G) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  // calculate the background color
  let blockBgColor: string;
  let rippleColor: string;

  if (variant === "hollow" || variant === "line" || variant === "dashed") {
    if (handleContrastColor(color, -30) === color) {
      rippleColor = `rgba(255, 255, 255, 0.2)`;
      blockBgColor = `rgba(255, 255, 255, 0.1)`;
    } else {
      rippleColor = `rgba(0, 0, 0, 0.2)`;
      blockBgColor = `rgba(0, 0, 0, 0.1)`;
    }
  } else {
    if (handleContrastColor(bgColor, -30) === bgColor) {
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
      {type === "route" && to ? (
        isTooltip === true && isTooltip ? (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={s.container}
          >
            {hover && (
              <div ref={tooltipRef} className={s.tooltip}>
                <div ref={tooltipContentRef} className={s.tooltipContent}>
                  <div className={s.tooltipContentText}>
                    {isLoading ? loadingText() : tooltipText}
                  </div>
                </div>
              </div>
            )}
            <Link
              id={id}
              className={`${s.button} ${isFullwidth ? s.full : ""}`}
              style={getButtonStyles()}
              to={to}
            >
              {subVariant === "icon" ? (
                <div style={{ zIndex: "3" }}>{iconContent}</div>
              ) : (
                <React.Fragment>
                  {startContent && !isLoading && (
                    <div style={{ zIndex: "3" }}>{startContent}</div>
                  )}
                  {!isLoading ? (
                    <div className={s.buttonText}>{buttonText}</div>
                  ) : loadingContent ? (
                    <div style={{ zIndex: "3" }}>{loadingContent}</div>
                  ) : (
                    <React.Fragment>
                      <div
                        className={s.ringSpinner}
                        style={{ borderTopColor: color }}
                      ></div>
                      <div className={s.buttonText}>{loadingText()}</div>
                    </React.Fragment>
                  )}
                  {endContent && !isLoading && (
                    <div style={{ zIndex: "3" }}>{endContent}</div>
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
            </Link>
          </div>
        ) : (
          <Link
            id={id}
            className={`${s.button} ${isFullwidth ? s.full : ""}`}
            style={getButtonStyles()}
            to={to}
          >
            {subVariant === "icon" ? (
              <div style={{ zIndex: "3" }}>{iconContent}</div>
            ) : (
              <React.Fragment>
                {startContent && !isLoading && (
                  <div style={{ zIndex: "3" }}>{startContent}</div>
                )}
                {!isLoading ? (
                  <div className={s.buttonText}>{buttonText}</div>
                ) : loadingContent ? (
                  <div style={{ zIndex: "3" }}>{loadingContent}</div>
                ) : (
                  <React.Fragment>
                    <div
                      className={s.ringSpinner}
                      style={{ borderTopColor: color }}
                    ></div>
                    <div className={s.buttonText}>{loadingText()}</div>
                  </React.Fragment>
                )}
                {endContent && !isLoading && (
                  <div style={{ zIndex: "3" }}>{endContent}</div>
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
          </Link>
        )
      ) : isTooltip === true && isTooltip ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={s.container}
        >
          {hover && (
            <div ref={tooltipRef} className={s.tooltip}>
              <div ref={tooltipContentRef} className={s.tooltipContent}>
                <div className={s.tooltipContentText}>
                  {isLoading ? loadingText() : tooltipText}
                </div>
              </div>
            </div>
          )}
          <button
            id={id}
            className={`${s.button} ${isDisabled ? s.disabled : ""} ${
              isLoading ? s.loading : ""
            } ${isFullwidth ? s.full : ""}`}
            style={getButtonStyles()}
            type={type === "submit" ? "submit" : "button"}
            onClick={handleClick}
            disabled={isLoading ? true : isDisabled}
          >
            {subVariant === "icon" ? (
              <div style={{ zIndex: "3" }}>{iconContent}</div>
            ) : (
              <React.Fragment>
                {startContent && !isLoading && (
                  <div style={{ zIndex: "3" }}>{startContent}</div>
                )}
                {!isLoading ? (
                  <div className={s.buttonText}>{buttonText}</div>
                ) : loadingContent ? (
                  <div style={{ zIndex: "3" }}>{loadingContent}</div>
                ) : (
                  <React.Fragment>
                    <div
                      className={s.ringSpinner}
                      style={{ borderTopColor: color }}
                    ></div>
                    <div className={s.buttonText}>{loadingText()}</div>
                  </React.Fragment>
                )}
                {endContent && !isLoading && (
                  <div style={{ zIndex: "3" }}>{endContent}</div>
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
          </button>
        </div>
      ) : (
        <button
          id={id}
          className={`${s.button} ${isDisabled ? s.disabled : ""} ${
            isLoading ? s.loading : ""
          } ${isFullwidth ? s.full : ""}`}
          style={getButtonStyles()}
          type={type === "submit" ? "submit" : "button"}
          onClick={handleClick}
          disabled={isLoading ? true : isDisabled}
        >
          {subVariant === "icon" ? (
            <div style={{ zIndex: "3" }}>{iconContent}</div>
          ) : (
            <React.Fragment>
              {startContent && !isLoading && (
                <div style={{ zIndex: "3" }}>{startContent}</div>
              )}
              {!isLoading ? (
                <div className={s.buttonText}>{buttonText}</div>
              ) : loadingContent ? (
                <div style={{ zIndex: "3" }}>{loadingContent}</div>
              ) : (
                <React.Fragment>
                  <div
                    className={s.ringSpinner}
                    style={{ borderTopColor: color }}
                  ></div>
                  <div className={s.buttonText}>{loadingText()}</div>
                </React.Fragment>
              )}
              {endContent && !isLoading && (
                <div style={{ zIndex: "3" }}>{endContent}</div>
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
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;

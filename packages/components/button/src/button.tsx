import React from "react";
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
  tooltip?: boolean;
  tooltipText: string;
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
  tooltip = false,
  tooltipText = "Tooltip!",
  iconContent,
  startContent,
  endContent,
  loadingContent,
  onClick,
  to,
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
    if (type === "button" || !to) {
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

  return (
    <React.Fragment>
      {type === "route" && to ? (
        tooltip === true && tooltip ? (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={s.container}
          >
            {hover && (
              <div ref={tooltipRef} className={s.tooltip}>
                <div ref={tooltipContentRef} className={s.tooltipContent}>
                  <div className={s.tooltipContentText}>{tooltipText}</div>
                </div>
              </div>
            )}
            <Link
              id={id}
              className={s.button}
              style={getButtonStyles()}
              to={to}
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
              {isRippling && (
                <span
                  className={s.buttonRipple}
                  style={{
                    left: coords.x,
                    top: coords.y,
                  }}
                />
              )}
              <div className={s.buttonBlock}></div>
            </Link>
          </div>
        ) : (
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
            {isRippling && (
              <span
                className={s.buttonRipple}
                style={{
                  left: coords.x,
                  top: coords.y,
                }}
              />
            )}
            <div className={s.buttonBlock}></div>
          </Link>
        )
      ) : tooltip === true && tooltip ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={s.container}
        >
          {hover && (
            <div ref={tooltipRef} className={s.tooltip}>
              <div ref={tooltipContentRef} className={s.tooltipContent}>
                <div className={s.tooltipContentText}>{tooltipText}</div>
              </div>
            </div>
          )}
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
            {isRippling && (
              <span
                className={s.buttonRipple}
                style={{
                  left: coords.x,
                  top: coords.y,
                }}
              />
            )}
            <div className={s.buttonBlock}></div>
          </button>
        </div>
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
          {isRippling && (
            <span
              className={s.buttonRipple}
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          )}
          <div className={s.buttonBlock}></div>
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;

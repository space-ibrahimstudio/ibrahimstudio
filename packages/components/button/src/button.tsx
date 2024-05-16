import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps, baseDefault } from "./types";
import { ISLoader, ISRipple } from "@ibrahimstudio/jsx";
import { useHandler, useRipple } from "@ibrahimstudio/hooks";
import { Tooltip } from "@ibrahimstudio/tooltip";
import { CustomCSSProperties, getButtonStyles, getMonochromeColor } from "@ibrahimstudio/styles";
import s from "./button.module.css";

const Button: React.FC<ButtonProps> = (props) => {
  const button = { ...baseDefault, ...props };
  const [isRippling, setIsRippling] = React.useState<boolean>(false);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({ x: -1, y: -1 });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!button.isDisabled && !button.isLoading) {
      useRipple(event, setCoords);
      if (button.type === "button") {
        button.onClick();
      } else if (button.type === "route" || button.type === "submit") {
        return;
      } else if (button.type === "link") {
        if (!button.isNewTab) {
          window.location.href = button.href;
        } else {
          window.open(button.href, "_blank");
        }
      }
    }
  };

  const buttonCSSProperties: CustomCSSProperties = {
    "--ibst-color-base-10": getMonochromeColor(button.color, 0.1),
    "--ibst-color-base-20": getMonochromeColor(button.color, 0.2),
  };

  useHandler(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useHandler(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  const renderButton = () => {
    const buttonElement = (
      <button
        id={button.id}
        type={button.type === "submit" ? "submit" : "button"}
        data-action={button.action}
        name={button.name}
        className={`${s.button} ${button.isDisabled ? s.disabled : ""} ${button.isLoading ? s.loading : ""} ${button.isFullwidth ? s.full : ""}`}
        style={{ ...getButtonStyles(button.variant, button.radius, button.size, button.color, button.bgColor), ...buttonCSSProperties }}
        disabled={button.isLoading || button.isDisabled}
        onClick={handleClick}
      >
        {button.subVariant === "icon" &&
          (button.isLoading ? (
            <div className={s.buttonIcon}>
              <ISLoader subVariant="icon" color={button.color} />
            </div>
          ) : (
            <div className={s.buttonIcon}>{button.iconContent}</div>
          ))}
        {button.subVariant === "reg" && (
          <React.Fragment>
            {button.startContent && !button.isLoading && <div className={s.buttonIcon}>{button.startContent}</div>}
            {button.isLoading ? (
              button.loadingContent ? (
                <div className={s.buttonIcon}>{button.loadingContent}</div>
              ) : (
                <ISLoader subVariant="reg" color={button.color} />
              )
            ) : (
              <b className={s.buttonText}>{button.buttonText}</b>
            )}
            {button.endContent && !button.isLoading && <div className={s.buttonIcon}>{button.endContent}</div>}
          </React.Fragment>
        )}
        {isRippling && <ISRipple coords={coords} />}
      </button>
    );
    return button.type === "route" ? <Link to={button.to}>{buttonElement}</Link> : buttonElement;
  };

  return (
    <React.Fragment>
      {button.isFullwidth === false && button.isTooltip ? <Tooltip content={button.tooltipText}>{renderButton()}</Tooltip> : renderButton()}
    </React.Fragment>
  );
};

export default Button;

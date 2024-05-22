import React from "react";
import { ButtonGroupProps } from "./types";
import Button from "./button";
import { getButtonGroupStyles } from "@ibrahimstudio/styles";
import s from "./button.module.css";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <section id={props.id} className={s.buttonGroup} style={getButtonGroupStyles(props.radius, props.baseColor)}>
      {props.buttons.map((btn, index) => (
        <Button
          key={index}
          id={`${props.id}-${index}`}
          type="button"
          size={props.size}
          radius={props.radius}
          variant={btn.isActive ? "fill" : "hollow"}
          color={btn.isActive ? props.baseColor : props.secondaryColor}
          bgColor={btn.isActive ? props.primaryColor : "transparent"}
          buttonText={btn.buttonText}
          name={btn.name}
          action={btn.action}
          onClick={btn.onClick}
          isDisabled={btn.isDisabled}
        />
      ))}
    </section>
  );
};

import React from "react";

interface ChevronIconProps {
  width: string;
  height: string;
  color?: string;
  direction?: "left" | "up" | "down" | "right";
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({
  width,
  height,
  color,
  direction,
}: ChevronIconProps) => {
  const fill = color || "currentColor";
  let rotation = 0;

  switch (direction) {
    case "left":
      rotation = 180;
      break;
    case "up":
      rotation = -90;
      break;
    case "down":
      rotation = 90;
      break;
    case "right":
      rotation = 0;
      break;
    default:
      rotation = 0;
      break;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        id="chevron-right-icon"
        d="M0.74814 11.3463C0.417338 11.6765 0.417279 12.212 0.748009 12.5423C1.07874 12.8726 1.61502 12.8726 1.94582 12.5424L7.109 7.38811C7.26788 7.2295 7.35714 7.01437 7.35714 6.79004C7.35714 6.56571 7.26788 6.35057 7.109 6.19197L1.94582 1.03768C1.61502 0.707443 1.07874 0.7075 0.748009 1.03781C0.417279 1.36811 0.417338 1.90358 0.74814 2.23381L5.31222 6.79004L0.74814 11.3463Z"
        fill={fill}
      />
    </svg>
  );
};

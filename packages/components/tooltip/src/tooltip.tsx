import React from "react";
import { LoadingText } from "@ibrahimstudio/contents";
import s from "./tooltip.module.css";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  isLoading?: boolean;
  color?: string;
  bgColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content = "IS Tooltip!",
  children,
  isLoading = false,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const hoverTimeout = React.useRef<number | null>(null);
  const tooltipContentRef = React.useRef<HTMLDivElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
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
        tooltipRef.current.style.transform =
          "translateY(calc(100% + var(--ibst-radius-10)))";
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

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={s.container}
    >
      {hover && (
        <div ref={tooltipRef} className={s.tooltip}>
          <div ref={tooltipContentRef} className={s.tooltipContent}>
            <div className={s.tooltipContentText}>
              {isLoading ? <LoadingText /> : content}
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;

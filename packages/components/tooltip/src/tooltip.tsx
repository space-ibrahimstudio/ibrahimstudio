import React from "react";
import { ISLoader } from "@ibrahimstudio/jsx";
import s from "./tooltip.module.css";

interface TooltipProps {
  content?: string;
  children: React.ReactNode;
  isLoading?: boolean;
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

  const delay: number = 500;

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

  const updateTooltipPosition = () => {
    if (tooltipContentRef.current && tooltipRef.current) {
      const rect = tooltipContentRef.current.getBoundingClientRect();
      const { top } = rect;

      if (top < 0) {
        tooltipRef.current.style.top = "unset";
        tooltipRef.current.style.bottom = "0";
        tooltipRef.current.style.transform =
          "translateY(calc(100% + var(--ibst-radius-10)))";
      }
    }
  };

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
              {isLoading ? <ISLoader /> : content}
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;

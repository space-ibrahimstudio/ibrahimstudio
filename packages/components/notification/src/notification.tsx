import React from "react";
import s from "./notification.module.css";

interface FloatingNotificationProps {
  type: "danger" | "warning" | "success";
  message: string;
  onClose: () => void;
}

export const FloatingNotification = ({
  type,
  message,
  onClose,
}: FloatingNotificationProps) => {
  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [isClosing, onClose]);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsClosing(true);
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notificationStyle =
    type === "danger"
      ? { backgroundColor: "var(--color-red)" }
      : type === "warning"
      ? { backgroundColor: "var(--color-yellow)" }
      : type === "success"
      ? { backgroundColor: "var(--color-blue)" }
      : {};

  return type === "danger" || type === "warning" || type === "success" ? (
    <div className={`${s.notifFloat} ${isClosing ? s.out : s.in}`} ref={ref}>
      <main className={s.notifFloatContent} style={notificationStyle}>
        <p className={s.notifFloatContentText}>{message}</p>
      </main>
    </div>
  ) : null;
};

import React from "react";
import { FloatingNotification } from "./notification";

interface Notification {
  type: "danger" | "warning" | "success";
  message: string;
  onClose?: () => void;
}

interface NotificationsContextType {
  showNotifications: (
    type: "danger" | "warning" | "success",
    message: string,
    onClose?: () => void
  ) => void;
  hideNotifications: () => void;
}

const NotificationsContext = React.createContext<
  NotificationsContextType | undefined
>(undefined);

export function useNotifications(): NotificationsContextType {
  const context = React.useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
}

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = React.useState<Notification | null>(
    null
  );

  React.useEffect(() => {
    const savedNotifications = JSON.parse(
      sessionStorage.getItem("notifications") || "null"
    );
    if (savedNotifications) {
      setNotifications(savedNotifications);
    }
  }, []);

  const showNotifications = (
    type: "danger" | "warning" | "success",
    message: string,
    onClose?: () => void
  ) => {
    const newNotification: Notification = { type, message, onClose };
    setNotifications(newNotification);
    sessionStorage.setItem("notifications", JSON.stringify(newNotification));
  };

  const hideNotifications = () => {
    setNotifications(null);
    sessionStorage.removeItem("notifications");
  };

  return (
    <NotificationsContext.Provider
      value={{ showNotifications, hideNotifications }}
    >
      {children}
      {notifications && (
        <FloatingNotification
          type={notifications.type}
          message={notifications.message}
          onClose={() => {
            hideNotifications();
            if (notifications.onClose) {
              notifications.onClose();
            }
          }}
        />
      )}
    </NotificationsContext.Provider>
  );
};

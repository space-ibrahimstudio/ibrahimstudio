import React, { createContext } from "react";
import { ContextProps, DeviceType } from "./types";

export const ISContext = createContext<ContextProps | undefined>(undefined);
const IbrahimStudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // log function for dev mode
  const log = (...args: any[]): void => {
    if (process.env.NODE_ENV === "development") {
      console.log(...args);
    }
  };
  // function to stip html content into plain text
  const stripContent = (html: string): string => {
    return html.replace(/<[^>]*>?/gm, "");
  };
  // function to convert string text into path-name
  const toPathname = (pathname: string): string => {
    return pathname.toLowerCase().replace(/\s+/g, "-");
  };
  // function to auto title casing
  const toTitleCase = (str: string): string => {
    return str.replace(/\w\S*/g, function (txt: string): string {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  // function to detect device type based on window width
  const device = (): DeviceType => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
      return "mobile";
    } else if (screenWidth <= 1120) {
      return "tablet";
    } else {
      return "desktop";
    }
  };
  // function to convert pixel value based on device (inline CSS)
  const pixel = (value: string, deviceType: DeviceType): string => {
    if (value.includes("px")) {
      const pxValue = parseFloat(value.replace("px", ""));
      switch (deviceType) {
        case "mobile":
          return `${pxValue * 0.7}px`;
        case "tablet":
          return `${pxValue * 0.8}px`;
        case "desktop":
          return value;
        default:
          return value;
      }
    } else {
      return value;
    }
  };
  // function to scroll view by id
  const scroll = (id: string, offset: number): void => {
    const element = document.querySelector(`[id="${id}"]`) as HTMLElement | null;
    if (element) {
      const yOffset: number = offset;
      const y: number = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };
  // function to format date into readable and user friendly
  const newDate = (dateString: string, locale: string = "en-US"): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString(locale, options);
  };
  // function to format price into locale values
  const newPrice = (amount: string | number, locale: string = "id-ID", currency: string = "IDR"): string => {
    const number = Number(amount);
    if (isNaN(number)) return "Invalid amount";
    const formattedNumber = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber;
  };
  // start function to detect online status
  const [isOnline, setIsOnline] = React.useState<boolean>(window.navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  React.useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  // end function to detect online status
  // start function to handle counting logic
  const [count, setCount] = React.useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  // end function to handle counting logic
  // start function to detect inner window size
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [height, setHeight] = React.useState<number>(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // end function to detect inner window size

  const value = {
    log,
    stripContent,
    toPathname,
    toTitleCase,
    device,
    pixel,
    scroll,
    newDate,
    newPrice,
    isOnline,
    count,
    increment,
    decrement,
    reset,
    width,
    height,
  };
  return <ISContext.Provider value={value}>{children}</ISContext.Provider>;
};

export default IbrahimStudioProvider;

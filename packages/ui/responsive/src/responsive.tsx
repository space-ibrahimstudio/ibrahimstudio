import React from "react";
import { useDeviceType, usePixelConverter } from "@ibrahimstudio/hooks";

type DeviceType = "mobile" | "tablet" | "desktop";

const ISResponsive: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [deviceType, setDeviceType] = React.useState<DeviceType>("desktop");

  React.useEffect(() => {
    const handleResize = () => {
      const newDeviceType = useDeviceType();
      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceType]);

  const processStyles = (styles: React.CSSProperties): React.CSSProperties => {
    const processedStyles: React.CSSProperties = {};
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        const propKey = key as keyof React.CSSProperties;
        const styleValue = styles[propKey];
        if (typeof styleValue === "string" && styleValue.includes("px")) {
          (processedStyles as any)[propKey] = usePixelConverter(
            styleValue,
            deviceType
          );
        } else {
          (processedStyles as any)[propKey] = styleValue;
        }
      }
    }
    return processedStyles;
  };

  const executeChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const updatedProps = {
          ...child.props,
          style: processStyles(child.props.style || {}),
        };
        return React.cloneElement(
          child,
          updatedProps,
          executeChildren(child.props.children)
        );
      }
      return child;
    });
  };

  return <>{executeChildren(children)}</>;
};

export default ISResponsive;

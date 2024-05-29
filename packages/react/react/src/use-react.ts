import { useContext } from "react";
import { ContextProps } from "./types";
import { ISContext } from "./react";

export const useContent = (): Pick<ContextProps, "stripContent" | "toPathname" | "toTitleCase"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useController must be used within IbrahimStudioProvider");
  }
  const { stripContent, toPathname, toTitleCase } = context;
  return { stripContent, toPathname, toTitleCase };
};

export const useDevmode = (): Pick<ContextProps, "log"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useDevmode must be used within IbrahimStudioProvider");
  }
  const { log } = context;
  return { log };
};

export const useDevice = (): Pick<ContextProps, "device" | "pixel"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useDevice must be used within IbrahimStudioProvider");
  }
  const { device, pixel } = context;
  return { device, pixel };
};

export const useStatus = (): Pick<ContextProps, "isOnline"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useStatus must be used within IbrahimStudioProvider");
  }
  const { isOnline } = context;
  return { isOnline };
};

export const useCounter = (): Pick<ContextProps, "count" | "increment" | "decrement" | "reset"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within IbrahimStudioProvider");
  }
  const { count, increment, decrement, reset } = context;
  return { count, increment, decrement, reset };
};

export const useFormat = (): Pick<ContextProps, "newDate" | "newPrice"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useFormat must be used within IbrahimStudioProvider");
  }
  const { newDate, newPrice } = context;
  return { newDate, newPrice };
};

export const useEvent = (): Pick<ContextProps, "scroll"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useEvent must be used within IbrahimStudioProvider");
  }
  const { scroll } = context;
  return { scroll };
};

export const useWindow = (): Pick<ContextProps, "width" | "height"> => {
  const context = useContext(ISContext);
  if (context === undefined) {
    throw new Error("useWindow must be used within IbrahimStudioProvider");
  }
  const { width, height } = context;
  return { width, height };
};

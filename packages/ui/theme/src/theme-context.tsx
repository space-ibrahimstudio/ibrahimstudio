import React from "react";

interface Theme {
  fontFamily: string;
  baseColor: string;
  primaryColor: string;
  secondaryColor: string;
}

interface ThemeContextType {
  theme: Theme | null;
  setThemeConfig: (themeConfig: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ISThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme | null>(null);
  const setThemeConfig = (themeConfig: Theme) => {
    setTheme(themeConfig);
  };

  return <ThemeContext.Provider value={{ theme, setThemeConfig }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ISThemeProvider");
  }

  return context;
};

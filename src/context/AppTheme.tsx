import React, { createContext, useEffect, useState } from "react";

export interface AppThemeContextProps {
  changetheme: () => void;
  theme: string;
}
interface AppThemeType {
  children: React.ReactNode;
}
export const AppThemeContext = createContext<AppThemeContextProps | null>(null);

export default function AppThemeProvider({ children }: AppThemeType) {
  const [theme, setTheme] = useState("dark");
  const root = React.useRef<HTMLElement | null>(null);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    root.current = document.documentElement;
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (!root.current) return;
    if (theme == "dark") {
      root.current.style.setProperty("--primary-color", "#1b4b66");
      root.current.style.setProperty("--background", "#021d2c");
      root.current.style.setProperty("--navbar", "#092d3e99");
      root.current.style.setProperty("--logo", "#d12241");
      root.current.style.setProperty("--darkgray", "#222");
      root.current.style.setProperty("--lightgray", "#eee");
      root.current.style.setProperty("--sider", "#222");
      root.current.style.setProperty("--navicon", "#eee");
      root.current.style.setProperty("--text", "#eee");
      root.current.style.setProperty("--search", "#293841");
      root.current.style.setProperty(
        "--bar",
        "linear-gradient(to right top,#f02a67, #e32655, #d42443, #c52333, #b62323)"
      );
    } else {
      root.current.style.setProperty("--primary-color", "#e0d7f3");
      root.current.style.setProperty("--background", "#e0d7f3");
      root.current.style.setProperty("--navbar", "#e0d7f399");
      root.current.style.setProperty("--logo", "#1b4b66");
      root.current.style.setProperty("--darkgray", "#eee");
      root.current.style.setProperty("--lightgray", "#222");
      root.current.style.setProperty("--sider", "#e0d7f399");
      root.current.style.setProperty("--navicon", "#f8f8f8f8");
      root.current.style.setProperty("--text", "#1b4b66");
      root.current.style.setProperty("--search", "#e0d7f3");
      root.current.style.setProperty(
        "--bar",
        "linear-gradient(to right top,#36f8e1,#3ed9c3, #40bba7, #3f9d8c,#3b8172)"
      );
    }
    setFirstRender(false);
  }, [theme]);

  const changetheme = () => {
    setTheme((old) => (old == "dark" ? "light" : "dark"));
    window.localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
  };
  if (firstRender) {
    return <div></div>;
  }
  return (
    <AppThemeContext.Provider value={{ changetheme, theme }}>
      {children}
    </AppThemeContext.Provider>
  );
}

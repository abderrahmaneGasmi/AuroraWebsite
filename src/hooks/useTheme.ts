import { useContext } from "react";
import { AppThemeContext } from "../context/AppTheme";

export const useTheme = () => useContext(AppThemeContext);

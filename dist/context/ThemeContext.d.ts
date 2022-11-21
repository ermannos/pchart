import React from "react";
import { Theme } from "../types";
export declare const ThemeContext: React.Context<Theme>;
export declare const ThemeProvider: React.FC<{
    value: Theme;
    children: React.ReactNode;
}>;
export declare function useTheme(): Theme;

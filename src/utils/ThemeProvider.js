"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Inter } from "next/font/google";

const ThemeContext = createContext();

const inter = Inter({ subsets: ["latin"] });

export function ThemeProvider ({ children }) {
    const [isDark, setIsDark] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {    
        var darkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
    
        if (darkMode == null) {
          darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
          localStorage.setItem("DARK_MODE", darkMode);
        }
    
        if (darkMode) setTheme("dark"); 
        else setTheme("light");
        
        setIsDark(darkMode);
    }, []);

    function toggleDarkTheme (toggle) {
        setIsDark(toggle);
        if (toggle) setTheme("dark"); 
        else setTheme("light");

        localStorage.setItem("DARK_MODE", toggle);
    }

    return (
        <ThemeContext.Provider 
            value={{
                isDark, 
                toggleDarkTheme
            }}
        >
            <body data-theme={theme} className={inter.className}>
                { children }
            </body>
        </ThemeContext.Provider>
    )
}

export function useTheme () {
    return useContext(ThemeContext);
}
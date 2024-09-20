import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [themeName, setThemeName] = useState("light");

    function handleTheme() {
        const newTheme = themeName === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        setThemeName(newTheme);
    }
    function changeTheme(){
        const newTheme = themeName === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        setThemeName(newTheme);
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            document.documentElement.setAttribute("data-bs-theme", storedTheme);
            setThemeName(storedTheme);

        }
        
    }, []);

    return (
        <ThemeContext.Provider value={{ themeName, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };
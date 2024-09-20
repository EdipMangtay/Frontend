import { useContext, useState } from "react";
import { lightThemeIcon, darkThemeIcon } from "./icons";
import { ThemeContext } from "../Context/ThemeContext";

export default function Themeicon(props) {

    const [theme,setTheme] = useState("light");
    const {themeName, handleTheme} = useContext(ThemeContext);
    console.log(themeName);


   
    return <>
     {theme === "light" ? <button  onClick={handleTheme}className="btn">{lightThemeIcon}Light</button> : <button className="btn" onClick={handleTheme}>{darkThemeIcon}Dark</button>}
    
    
    </>



}
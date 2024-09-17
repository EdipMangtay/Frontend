import React, { useState } from 'react'
import '../css/Header.css';
import { FaBasketShopping } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { GoMoon } from "react-icons/go";




function Header() {
    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
    }

  return (
    <>
    <div style={{display:"flex" , flexDirection:"row" , alignItems:"center",justifyContent:"space-between"}} >
        <div className='flex-row'>
            <img src="./src/images/logov1.png" alt="" className="logo" />
            <p className='logo-text'>Edip Mangtay</p>
        </div>

        <div className='flex-row'>
            <input className ="search-input" type="text" placeholder='Bir Şeyler Ara' />
            <div className='icon'>
                <FaBasketShopping />
                <MdModeNight  onClick={changeTheme}/>
                {/* <GoMoon /> */}
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Header

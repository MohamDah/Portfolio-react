import logo from "./images/logo.png"
import React, { useEffect, useState } from "react"

export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false);

    function toggleNav() {
        setNavOpen(prev => !prev)
    }

    const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const localTheme = localStorage.getItem("theme");

    const [theme, setTheme] = useState(localTheme ? localTheme : sysTheme);

    useEffect(() => {
        localStorage.setItem("theme", `${theme}`)
    }, [theme]);

    const root = document.querySelector(":root");
    root?.setAttribute("color-scheme", `${theme}`);

    function toggleTheme() {
        setTheme(prev => {
            return prev === "dark" ? "light" : "dark";
        })
    }


    return (
        <header className={navOpen ? "nav-open" : ""}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

            <button onClick={toggleTheme} className="toggleTheme">
                {
                    theme === "light"
                    ? <i className="fa-regular fa-moon"></i>
                    : <i className="fa-solid fa-moon"></i>
                }
            </button>

            <button onClick={toggleNav} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className={`nav`}>
                <ul className="nav__list">
                    <li onClick={toggleNav} className="nav__item"><a href="/#home" className="nav__link">Home</a></li>
                    <li onClick={toggleNav} className="nav__item"><a href="/#services" className="nav__link">My Services</a></li>
                    <li onClick={toggleNav} className="nav__item"><a href="/#about" className="nav__link">About me</a></li>
                    <li onClick={toggleNav} className="nav__item"><a href="/#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}
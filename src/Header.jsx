import logo from "./images/logo.png"
import React from "react"

export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false);

    function toggleNav() {
        setNavOpen(prev => !prev)
    }

    return (
        <header className={navOpen ? "nav-open" : ""}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
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
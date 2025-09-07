import "../styles/Header.css"
import devLogo from "../images/dev-logo.svg"

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <h1>KK</h1>
                <img src={devLogo}></img>
            </div>
            <div className="links-container">
                <h4 className="link-text">About</h4>
                <h4 className="link-text">Projects</h4>
                <h4 className="link-text">Contact</h4>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kylaknauber/"
                    className="link-text">
                    LinkedIn
                </a>
                <a  
                    target="_blank"  
                    href="https://github.com/kylaknauber"
                    className="link-text">
                    GitHub
                </a>
            </div>
        </header>
    )
}
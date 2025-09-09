import "../styles/contact.css"
import emailIcon from "../images/email-icon.svg"
import locationIcon from "../images/location-icon.svg"
import phoneIcon from "../images/phone-icon.svg"
import githubLogo from "../images/github-logo.png"
import linkedinLogo from "../images/linkedin-logo.png"

export default function Contact() {
    const handleEmailClick = () => {
        //
    }

    const handleLocationClick = () => {

    }

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/kylaknauber/", "_blank");
    }

    const handleGitHubClick = () => {
        window.open("https://github.com/kylaknauber", "_blank");
    }

    return (
        <div className="contact-section">
            <div>
                <h1>Contact Me</h1>
                <div className="contact-info">
                    <div className="location">
                        <img src={locationIcon}></img>
                        <p>Hershey, Pennsylvania</p>
                    </div>
                    <div className="info">
                        <div>
                            <img src={emailIcon}></img>
                            <p>kylaknauber@gmail.com</p>
                        </div>
                        <div>
                            <img src={phoneIcon}></img>
                            <p>+1 (717) - 805 - 3230</p>
                        </div>
                        <div>
                            <img src={linkedinLogo}></img>
                            <p>kylaknauber</p>
                        </div>
                        <div>
                            <img src={githubLogo}></img>
                            <p>kylaknauber</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
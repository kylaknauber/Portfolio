import "../styles/contact.css"
import emailIcon from "../images/email-icon.svg"
import locationIcon from "../images/location-icon.svg"
import phoneIcon from "../images/phone-icon.svg"
import githubLogo from "../images/github-logo.png"
import linkedinLogo from "../images/linkedin-logo.png"

export default function Contact() {
    const handleEmailClick = () => {
        window.open("mailto:kylaknauber@gmail.com", "_blank");
    }

    const handleLocationClick = () => {
        window.open("https://www.google.com/maps/dir//hershey,pa/@40.2700357,-76.6733347,13.74z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c8bb5eccb2aff3:0x7467ff30c8a65e56!2m2!1d-76.6502468!2d40.2859239?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D", "_blank");
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
                    <div onClick={handleLocationClick}
                        className="location">
                        <img src={locationIcon}></img>
                        <p>Hershey, Pennsylvania</p>
                    </div>
                    <div className="info">
                        <div onClick={handleEmailClick}>
                            <img src={emailIcon}></img>
                            <p>kylaknauber@gmail.com</p>
                        </div>
                        <div>
                            <img src={phoneIcon}></img>
                            <p>+1 (717) - 805 - 3230</p>
                        </div>
                        <div onClick={handleLinkedInClick}>
                            <img src={linkedinLogo}></img>
                            <p>kylaknauber</p>
                        </div>
                        <div onClick={handleGitHubClick}>
                            <img src={githubLogo}></img>
                            <p>kylaknauber</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
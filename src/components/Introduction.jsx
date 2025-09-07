import HeadShot from "../images/KylaK-Pic.JPG"
import "../styles/Introduction.css"
export default function Introduction() {
    const handleResumeClick = () => {
        window.open("/Resume-KylaKnauber.pdf", "_blank");
    }

    return (
        <div className="intro-container">
            <div className="intro-text">
                <h1 className="greeting">Hi, I'm Kyla Knauber!</h1>
                <h3 className="title">Aspiring Software Developer</h3>
                <p className="message">
                    I'm a recent college graduate with a passion for softare development and a knack for problem-solving.
                    I love creating efficient and user-friendly applications that make a difference!
                </p>
                <button onClick={handleResumeClick}
                    className="resume-button">Resume</button>
            </div>
            <div className="intro-image">
                <img src={HeadShot} className="headshot" />
            </div>
        </div>
    )
}
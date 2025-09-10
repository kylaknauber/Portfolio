import HeadShot from "../images/KylaK-Pic.JPG"
import "../styles/Introduction.css"
import RevealSection from "./RevealSection";

export default function Introduction() {
    const handleResumeClick = () => {
        window.open("/Resume-KylaKnauber.pdf", "_blank");
    }

    return (
        <RevealSection classSection="intro-container">
            <RevealSection classSection="intro-text">
                <RevealSection classSection="greeting">Hi, I'm Kyla Knauber!</RevealSection>
                <RevealSection classSection="title">Aspiring Software Developer</RevealSection>
                <RevealSection className="message">
                    I'm a recent college graduate with a passion for softare development and a knack for problem-solving.
                    I love creating efficient and user-friendly applications that make a difference!
                </RevealSection>
                <button onClick={handleResumeClick}
                    className="resume-button">Resume</button>
            </RevealSection>
            <div className="intro-image">
                <img src={HeadShot} className="headshot" />
            </div>
        </RevealSection>
    )
}
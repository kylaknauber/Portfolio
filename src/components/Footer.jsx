import "../styles/footer.css"
import devLogo from "../images/dev-logo.svg"

export default function Footer() {
    const pictureCredits = [
        {
            name: "Binge Index Icon",
            link: "https://www.flaticon.com/free-icons/cinema",
            source: "Cinema icons created by xnimrodx - Flaticon"
        },
        {
            name: "Uno Logo",
            link: "https://commons.wikimedia.org/wiki/File:UNO_Logo.svg",
            source: "Public domain, via Wikimedia Commons"
        },
        {
            name: "Facial Recognition Logo",
            link: "https://www.flaticon.com/free-icons/face-recognition",
            source: "Face recognition icons created by Andrean Prabowo - Flaticon"
        },
        {
            name: "Compiler Logo",
            link: "https://www.flaticon.com/free-icons/compiler",
            source: "Compiler icons created by Karyative - Flaticon"
        },
        {
            name: "Flappy Bird Logo",
            link: "https://pnghut.com",
            source: null
        },
    ]

    return (
        <footer className="footer-container">
            <div className="logo">
                <h1>KK</h1>
                <img src={devLogo}></img>
            </div>
            <div className="my-info">
                <p>Portfolio created by Kyla Knauber</p>
            </div>
            <div className="sources">
                <p>Sources</p>
                <div>
                    {pictureCredits.map((picture, index) => (
                        <a key={index} href={picture.link} title={picture.source}>{picture.name}</a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
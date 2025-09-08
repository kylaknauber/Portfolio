import "../styles/projects.css"; 
import { projects } from "../data/data"
import { useState } from "react"
import githubLogo from "../images/github-logo.png"

export default function Projects() {
    const [toggleViewMore, setToggleViewMore] = useState(false);

    const handleGitHubClick = (link) => {
        window.open(link, "_blank");
    }

    const projectElements = projects.map(project => {
        return (
            <div className="project">
                <div className="project-image">
                    <img src={project.images[0]}></img>
                </div>
                <div className="title-container">
                    <p className="project-title">{project.name}</p>
                    <div>
                        <img title="Open in GitHub"
                            onClick={() => handleGitHubClick(project.link)}
                            src={githubLogo}></img>
                    </div>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="language-container">
                    {project.languages.map(lang => {
                        return (
                            <div>{lang}</div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className="projects-section">
            <div>
                <h1>Projects</h1>
                <div className="projects-container">
                    {projectElements}
                </div>
            </div>
        </div>
    )
}
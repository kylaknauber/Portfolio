import "../styles/projects.css"; 
import { projects } from "../data/data"
export default function Projects() {

    const projectElements = projects.map(project => {
        return (
            <div className="project">
                <div className="project-image">
                    <img src={project.images[0]}></img>
                </div>
                <p className="project-title">{project.name}</p>
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
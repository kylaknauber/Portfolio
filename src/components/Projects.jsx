import "../styles/projects.css"; 
import { programs } from "../data/data"
import { useState, useRef } from "react"
import githubLogo from "../images/github-logo.png"
import moreInfoIcon from "../images/more-info-icon.svg"

export default function Projects() {
    const [projects, setProjects] = useState(programs);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const projectRefs = useRef({});

    const handleGitHubClick = (link) => {
        window.open(link, "_blank");
    }

    const handleMoreInfoClick = (id) => {
        setProjects(prev => 
            prev.map(proj => 
                proj.id === id 
                ? {...proj, toggleView: !proj.toggleView}
                : proj
            )
        )
        setIsExpanded(prev => !prev);

        setTimeout(() => {
            if(!isExpanded) {
                projectRefs.current[id]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
            }
        }, 200);
    }

    const projectElements = projects.map(project => {
        return (
            <div key={project.id}
                ref={el => (projectRefs.current[project.id] = el)}
                className={`project ${project.toggleView ? "expanded" : ""}`}>
                <div className="project-image">
                     <img src={project.images[0]}></img>
                </div>
                <div className="title-container">
                     <p className="project-title">{project.name}</p>
                     <div>
                         <img className="more-info"
                             title="More Info"
                             onClick={() => handleMoreInfoClick(project.id)}
                             src={moreInfoIcon}></img>
                         <img className="github-icon"
                             title="Open in GitHub"
                             onClick={() => handleGitHubClick(project.link)}
                             src={githubLogo}></img>
                     </div>
                </div>
                <p className={project.toggleView ? "project-desc-all" : "project-desc"}>{project.description}</p>
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
                <div className={`projects-container ${isExpanded ? "dimmed" : ""}`}>
                    {projectElements}
                </div>
            </div>
        </div>
    )
}


/** Rendering with a different div
 * 
 * return (
            <>
                {!project.toggleView ?
                   <div key={project.id}
                        className="project">
                        <div className="project-image">
                            <img src={project.images[0]}></img>
                        </div>
                        <div className="title-container">
                            <p className="project-title">{project.name}</p>
                            <div>
                                <img className="more-info"
                                    title="More Info"
                                    onClick={() => handleMoreInfoClick(project.id)}
                                    src={moreInfoIcon}></img>
                                <img className="github-icon"
                                    title="Open in GitHub"
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
                :
                    <div key={project.id}
                        className="project-shown">
                        <button onClick={() => handleMoreInfoClick(project.id)}>View more true</button>
                    </div>
            }
            </>
        )
 */
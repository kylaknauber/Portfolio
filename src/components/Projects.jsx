import "../styles/projects.css"; 
import { programs } from "../data/data"
import { useState, useRef } from "react"
import githubLogo from "../images/github-logo.png"
import moreInfoIcon from "../images/more-info-icon.svg"
import RevealSection from "../components/RevealSection"
export default function Projects(props) {
    const [projects, setProjects] = useState(programs);
    const [isExpanded, setIsExpanded] = useState(false);
    const [imageExpanded, setImageExpanded] = useState(null);

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

    const handleImageClick = (imageData) => {
        setImageExpanded(imageData);
    }

    console.log(projects);

    const projectElements = projects.map(project => {
        return (
            <RevealSection key={project.id}
                ref={el => (projectRefs.current[project.id] = el)}
                classSection={`project ${project.toggleView ? "expanded" : ""}`}>
                {project.toggleView ?
                    <div className="images-wrapper">
                        <div className={`project-image-expanded project-${project.id}` }>
                            {   // If project is 6, remove first two images, else, remove the first image (removing the thumbnail for the expanded image)
                                project.id === 6
                                    ? <>
                                        <div className={`images ${imageExpanded ? "paused" : ""}`}>
                                            {project.images.slice(2).map(image => (
                                                <div key={image.src} className="expanded-img-div">
                                                    <img onClick={() => handleImageClick(image)}
                                                        src={image.src}></img>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={`images ${imageExpanded ? "paused" : ""}`}>
                                            {project.images.slice(2).map(image => (
                                                <div key={image.src} className="expanded-img-div">
                                                    <img onClick={() => handleImageClick(image)}
                                                        src={image.src}></img>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                    : <>
                                        {project.id === 5 || project.id === 4
                                            ? 
                                            <div className={`images project-${project.id}` }>
                                                {project.images.filter((_, index) => index !== 0).map((image) => (
                                                    <div key={image.src} className={`expanded-img-div project-${project.id}`}>
                                                        <img onClick={() => handleImageClick(image)}
                                                            className={`project-${project.id}-images`} src={image.src}></img>
                                                    </div>
                                                ))}
                                            </div>
                                            :
                                            <>
                                                <div className={`images ${imageExpanded ? "paused" : ""}`}>
                                                    {project.images.filter((_, index) => index !== 0).map((image) => (
                                                        <div key={image.src} className={`expanded-img-div project-${project.id}`}>
                                                            <img onClick={() => handleImageClick(image)}
                                                                className={`project-${project.id}-images`} src={image.src}></img>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={`images ${imageExpanded ? "paused" : ""}`}>
                                                    {project.images.filter((_, index) => index !== 0).map((image) => (
                                                        <div key={image.src} className={`expanded-img-div project-${project.id}`}>
                                                            <img onClick={() => handleImageClick(image)}
                                                                className={`project-${project.id}-images`} src={image.src}></img>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        }
                                    </>
                             }
                        </div>
                    </div>
                    :
                    <div className="project-image">
                        {project.id === 6
                            ? <div className="proj-6-img-div">
                                <img
                                    className={`pic-${project.id}-1`}
                                    src={project.images[0].src}
                                ></img>
                                <img
                                    className={`pic-${project.id}-2`}
                                    src={project.images[1].src}
                                ></img>
                            </div>
                            : <img className={`pic-${project.id}`} src={project.images[0].src}></img>}
                    </div>
                }
                <div className="title-container">
                     <p className="project-title">{project.name}</p>
                     <div>
                         <img className="more-info"
                             title={project.toggleView ? "Show Less" : "Show More"}
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
                     {project.languages.map((lang, index) => {
                         return (
                             <div key={index}>{lang}</div>
                         )
                     })}
                </div>
            </RevealSection>
        )
    })

    return (
        <>
            <RevealSection classSection="projects-section">
                <div ref={props.sectionRef}>
                    <h1 className="section-title">Projects</h1>
                    <div className={`projects-container ${isExpanded ? "dimmed" : ""}`}>
                        {projectElements}
                    </div>
                </div>
            </RevealSection>
            {imageExpanded && 
                <div className="expanded-image-overlay">
                    <div className="image-container">
                        <img onClick={() => handleImageClick(null)}
                            src={imageExpanded.src}></img>
                    </div>
                    <p className="image-caption">{imageExpanded.caption}</p>
                </div>   
            }
        </>
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
import "../styles/About.css"; 
export default function About() {
    const skills = ["Java", "JavaScript", "React", "C++", "C#",
        "HTML", "CSS", "Python", "Vue.js", "Node.js", "Firebase", "MySQL",
        "Oracle", "Web API", "Git", "GitHub", "Visual Studio", "VS Code", "JetBrains IDEs",
        "Jest", "MS Office", "Problem-Solving", "Critical Thinking",
        "Collaboration", "Conflict Resolution"
    ];
    const softSkills = ["Problem-Solving", "Critical Thinking",
        "Col", "Conflict Resolution", "Teamwork"
    ];
    const courses = ["Design Analysis of Algorithms", "Data Structures",
        "Compilers", "Operating Systems", "Database Design",
        "Software Engineering and Design", "Netcentric Computing",
        "Advanced Programming in C++", "Computer Graphics", "Computer Organization and Architecture"
    ];
    const certifications = ["Learn C#", "Learn Adv React", "Learn Node.js",
        "Learn React Router", "Learn Node-SQLite", "MS Azure Fundamentals", "Build .NET Apps with C#"
    ];

    const skillSection = skills.map(skill => {
        return (
            <div className="skill">{skill}</div>
        )
    });

    const courseSection = courses.map(course => {
        return (
            <div className="skill">{course}</div>
        )
    });

    const certSection = certifications.map(cert => {
        return (
            <div className="skill">{cert}</div>
        )
    })

    return (
        <div className="about-container">
            <div className="about-info">
                <h1>About</h1>
                <p className="about-message">
                    I am an aspiring software developer with a passion for solving problems and creating efficient, user-friendly applications.
                    I recently graduated from Penn State University with a Bachelor of Science in Computer Science. I achieved a <span>3.88 GPA</span> and graduated <span>Cum Laude</span>.
                    I also was a member of <span>Upsilon Pi Epsilon</span>, the International Honor Society for the Computing and Information Disciplines, and I received
                    the <span>President Walker Award</span> for Academic Excellence. Throughout my academic career, I have developed strong skills in various programming languages and
                    technologies, including <span>Java</span>, <span>JavaScript</span>, <span>React</span> <span>C++</span>, <span>HTML</span>, <span>CSS</span>, <span>Python</span>, <span>C#</span>, <span>Vue.js</span>, <span>Node.js</span>, <span>Firebase</span> and <span>SQL</span>. I have also gained experience working on team projects, which
                    has helped me develop strong communication and collaboration skills. Over the past few months, I have obtained certifications in courses through Scrimba and CodeAcademy
                    to further my knowledge and skills in development, and applied new knowledge in a few personal projects I created, which can be found below.
                    I am excited to start my career in software development and am eager to contribute my skills and knowledge!
                </p>
                <br></br>
                <br></br>
                <br></br>
                <div className="extra-info">
                    <div>
                        <h3>Skills</h3>
                        <div className="skills-container">
                            {skillSection}
                        </div>
                    </div>
                    <div>
                        <h3>College Courses</h3>
                        <div className="skills-container">
                            {courseSection}
                        </div>
                    </div>
                    <div>
                        <h3>Extra Courses and Certifications</h3>
                        <div className="skills-container">
                            {certSection}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
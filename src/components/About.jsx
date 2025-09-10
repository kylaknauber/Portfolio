import "../styles/About.css"; 
import RevealSection from "./RevealSection";
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
    const certifications = [
        {
            id: 1,
            name: "Learn C#",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/65f0ff88f4fc58e0536b3b51648dff24"
        },
        {
            id: 2,
            name: "Learn Adv React",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/13ffe064f6504262a9e9e3cf76be9bf3"
        },
        {
            id: 3,
            name: "Learn Node.js",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/240305d50b925c17868f1ac7a21a3261"
        },
        {
            id: 4,
            name: "Learn React Router",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/15b32ebcd95f164740d02275674fc5ee"
        },
        {
            id: 5,
            name: "Connect Front-End to Back-End",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/5b4a7c00ec9175d141a8b6e611d4812a"
        },
        {
            id: 6,
            name: "Learn Node-SQLite",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/f0257b235b081aca2766010aad2df800"
        },
        {
            id: 7,
            name: "Intro to Ethical Hacking",
            credentialLink: "https://www.codecademy.com/profiles/kylaknauber/certificates/03f04867616242888444dd22f20c29e5"
        },
        {
            id: 8,
            name: "MS Azure Fundamentals",
            credentialLink: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/"
        },
        {
            id: 9,
            name: "Build .NET Apps with C#",
            credentialLink: "https://learn.microsoft.com/en-us/training/paths/build-dotnet-applications-csharp/"
        }
    ];

    const skillSection = skills.map(skill => {
        return (
            <RevealSection classSection="skill">{skill}</RevealSection>
        )
    });

    const courseSection = courses.map(course => {
        return (
            <RevealSection
                classSection="skill">{course}</RevealSection>
        )
    });

    const certSection = certifications.map(cert => {
        return (
            <RevealSection key={cert.id}
                clickableFunc={() => { window.open(cert.credentialLink, "_blank") }}
                classSection="skill cert">{cert.name}</RevealSection>
        )
    });

    return (
        <RevealSection classSection="about-container">
            <div className="about-info">
                <h1>About</h1>
                <RevealSection classSection="about-message">
                    I am an aspiring software developer with a passion for solving problems and creating efficient, user-friendly applications.
                    I recently graduated from Penn State University with a Bachelor of Science in Computer Science. I achieved a <span>3.88 GPA</span> and graduated <span>Cum Laude</span>.
                    I also was a member of <span>Upsilon Pi Epsilon</span>, the International Honor Society for the Computing and Information Disciplines, and I received
                    the <span>President Walker Award</span> for Academic Excellence. Throughout my academic career, I have developed strong skills in various programming languages and
                    technologies, including <span>Java</span>, <span>JavaScript</span>, <span>React</span> <span>C++</span>, <span>HTML</span>, <span>CSS</span>, <span>Python</span>, <span>C#</span>, <span>Vue.js</span>, <span>Node.js</span>, <span>Firebase</span> and <span>SQL</span>. I have also gained experience working on team projects, which
                    has helped me develop strong communication and collaboration skills. Over the past few months, I have obtained certifications in courses through Scrimba and CodeAcademy
                    to further my knowledge and skills in development, and applied new knowledge in a few personal projects I created, which can be found below.
                    I am excited to start my career in software development and am eager to contribute my skills and knowledge!
                </RevealSection>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <RevealSection classSection="extra-info">
                    <div>
                        <h3 className="skills-heading">Skills</h3>
                        <div className="skills-container">
                            {skillSection}
                        </div>
                    </div>
                    <div>
                        <h3 className="skills-heading">College Courses</h3>
                        <div className="skills-container">
                            {courseSection}
                        </div>
                    </div>
                    <div>
                        <h3 className="skills-heading">Extra Courses and Certifications</h3>
                        <div className="skills-container">
                            {certSection}
                        </div>
                    </div>
                </RevealSection>
            </div>
        </RevealSection>
    )
}
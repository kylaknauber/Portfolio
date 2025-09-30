import bingeIndexLogo from "../images/binge-index-logo.png"
import faceLogo from "../images/face-recognition-logo.png"
import compilerLogo from "../images/compiler-logo.png"
import unoLogo from "../images/UNO_Logo.svg.png"
import slidingPuzzle from "../images/sliding-puzzle.png"
import toh from "../images/toh-game.png"
import flappyBirdBird from "../images/flappy-bird-bird.png"
import bingeIndex1 from "../images/project-1-1.png"
import bingeIndex2 from "../images/project-1-2.png"
import bingeIndex3 from "../images/project-1-3.png"
import bingeIndex4 from "../images/project-1-4.png"
import bingeIndex5 from "../images/project-1-5.png"
import uno1 from "../images/project-2-1.png"
import uno2 from "../images/project-2-2.png"
import uno3 from "../images/project-2-3.png"
import uno4 from "../images/project-2-4.png"
import uno5 from "../images/project-2-5.png"
import capstone1 from "../images/project-3-1.png"
import capstone2 from "../images/project-3-2.png"
import capstone3 from "../images/project-3-3.png"
import capstone4 from "../images/project-3-4.png"
import capstone5 from "../images/project-3-5.png"
import compiler1 from "../images/project-4-1.png"
import compiler2 from "../images/project-4-2.png"
import compiler3 from "../images/project-4-3.png"
import flappyBird1 from "../images/project-5-1.png"
import flappyBird2 from "../images/project-5-2.png"
import flappyBird3 from "../images/project-5-3.png"
import angular1 from "../images/project-6-1.png"
import angular2 from "../images/project-6-2.png"
import angular3 from "../images/project-6-3.png"
import angular4 from "../images/project-6-4.png"
import angular5 from "../images/project-6-5.png"

export const programs = [
    {
        id: 1,
        name: "Binge Index",
        description: "Using my knowledge of React and JavaScript, I created a user friendly application which allows users to search for any movie, TV show, and person which is present in TMDB database. I used React Router for a robust navigation system, pull data and queries from TMDB web API, and implemented a log in system using Firebase Authentication. Users can favorite any item they choose which is securely stored in a Firestore Database. Pagination allows for efficient data retrieval to prevent slow rendering.",
        languages: ["React", "JavaScript", "React Router", "Firebase", "Web API", "CSS"],
        link: "https://github.com/kylaknauber/Binge-Index",
        images: [
            {
                src: bingeIndexLogo,
                caption: "Binge Index Logo"
            }, {
                src: bingeIndex1,
                caption: "Home Page"
            },
            {
                src: bingeIndex2,
                caption: "Media Details Page (showing a TV Show)"
            },
            {
                src: bingeIndex3,
                caption: "Viewing more details for a TV Show"
            },
            {
                src: bingeIndex4,
                caption: "Favorites Page (if user is logged in)"
            },
            {
                src: bingeIndex5,
                caption: "Profile Page for logged in user"
            }
        ],
        toggleView: false,
        dates: "July 2025 - Present"
    },
    {
        id: 2,
        name: "UNO",
        description: "Using skills in React, JavaScript, and CSS, I created an UNO game for a user to play against the computer. Each player is dealt 7 cards randomly, then the application randomly selects which player to begin the game, to which they place one of their dealt cards. The game continues until one user is left with no cards. This is a single page react application focusing on conditional rendering to create a user-friendly and efficient game. Includes a simple Firebase connection to store user's name, score, and date they played if they wish to upload such data.",
        languages: ["React", "JavaScript", "Firebase", "CSS"],
        link: "https://github.com/kylaknauber/UNO-Game",
        images: [
            {
                src: unoLogo,
                caption: "Uno Logo"
            }, {
                src: uno1,
                caption: "Beginning game board (white outline on deck signifies which turn)"
            },
            {
                src: uno2,
                caption: "After player places a card, now the opponent's turn"
            },
            {
                src: uno3,
                caption: "Player places a Wild Card"
            },
            {
                src: uno4,
                caption: "Game Over: Player Wins"
            },
            {
                src: uno5,
                caption: "Player is submitting score to Firestore"
            }
        ],
        toggleView: false,
        dates: "May 2025 - Present"
    },
    {
        id: 3,
        name: "Facial Paralysis Tracking App",
        description: "Senior Capstone Project | Collaborated with a team to create a cross-platform application to assist patients and physicians in tracking facial paralysis recovery and treatment. Allows patients and physicians to communicate with each other asynchronously via a direct messaging system in the application. Used AI and ML technologies for the device camera to track lighting, faces, etc. to ensure quality images are uploaded and sent to physicians. Used Firebase to store patient and physician data along with patient images. React Native is the backbone of the front-end which allows for a smooth and efficient UI for web and mobile devices.",
        languages: ["React Native", "Firebase", "Node.js", "Google Cloud API", "TensorFlow", "BlazeFace"],
        link: "https://github.com/kylaknauber/Spring2025-GradingFacialParalysis",
        images: [
            {
                src: faceLogo,
                caption: "Facial Recognition Logo"
            }, {
                src: capstone1,
                caption: "Physician Home Screen (Admin Physician)"
            },
            {
                src: capstone2,
                caption: "Patient Creation Screen (Accessed by Admin Physicians)"
            },
            {
                src: capstone3,
                caption: "Patient Upload Screen (uploading facial images)"
            },
            {
                src: capstone4,
                caption: "Direct Message Screen between Patient (sender) and Physician (receiver). Most recent messages appear at the top, and images a patient uploads can be viewed by their physician via direct messages."
            },
            {
                src: capstone5,
                caption: "Camera Screen for Patients"
            }
        ],
        toggleView: false,
        dates: "January - April 2025"
    },
    {
        id: 4,
        name: "Mini C Compiler",
        description: "Created a Mini C Compiler throughout Compilers class, including various sub projects like a Tokenizer, Lexical Analyzer, Syntax Analyzer, and Semantic Analyzer. Each project was created with Java, along with JFlex for the Lexical Analyzer, and BYACC/J for the bottom-up parser in the Semantic Analyzer. The Mini C Compiler tests Mini C code files for lexical errors, syntax errors, and semantic errors, in which a successful file would \"execute\" in the run time environment.",
        languages: ["Java", "BYaccJ", "JFlex"],
        link: "https://github.com/kylaknauber/Mini-C-Compiler",
        images: [
            {
                src: compilerLogo,
                caption: "Compiler Logo"
            }, {
                src: compiler1,
                caption: "Program is successfully compiled, no lexical, syntax or semantic errors. Shows the indented and formatted code that was read through a text file."
            },
            {
                src: compiler2,
                caption: "Part 2 of the first image: This is the running environment for said code, along with the returned values."
            },
            {
                src: compiler3,
                caption: "Program is successfully compiled, showing the indented and formatted code, as well as the running environment and returned values from said code."
            }
        ],
        toggleView: false,
        dates: "January - April 2025"
    },
    {
        id: 5,
        name: "Flappy Bird",
        description: "Recreated Flappy Bird which uses the same format and objects as the original game. In order to play the game, the user would left click or press the space bar to start, and then navigate the bird through the pipes without hitting the ground or pipes. Users can submit their score to Firestore if they choose.",
        languages: ["Vue.js", "JavaScript", "HTML", "CSS", "Firebase"],
        link: "https://github.com/kylaknauber/Flappy-Bird",
        images: [
            {
                src: flappyBirdBird,
                caption: "Flappy Bird Logo"
            }, {
                src: flappyBird1,
                caption: "Start Screen"
            },
            {
                src: flappyBird2,
                caption: "Playing the Game"
            },
            {
                src: flappyBird3,
                caption: "Game Over Screen"
            }
        ],
        toggleView: false,
        dates: "March 2025"
    },
    {
        id: 6,
        name: "TOH/Sliding Puzzle",
        description: "Created an application which allows users to pick between playing two games: Towers of Hanoi or a Sliding Puzzle game. This was my first Angular application created in my web programming class.",
        languages: ["Angular", "TypeScript", "HTML", "CSS"],
        link: "https://github.com/kylaknauber/TOH-Sliding-Puzzle",
        images: [
            {
                src: toh,
                caption: "TOH Logo"
            }, {
                src: slidingPuzzle,
                caption: "Sliding Puzzle Logo"
            },
            {
                src: angular1,
                caption: "Beginning the TOH Game"
            },
            {
                src: angular2,
                caption: "User is moving the blocks between the 3 pegs"
            },
            {
                src: angular3,
                caption: "TOH Complete"
            },
            {
                src: angular4,
                caption: "Beginning the Sliding Puzzle Game"
            },
            {
                src: angular5,
                caption: "User is moving the block (3) to the open slot"
            }
        ],
        toggleView: false,
        dates: "April 2025"
    }

]

        /**
         * {
        id: 6,
        name: "Car Rental Software",
        description: "Simple GUI for user to create a reservation to rent a car. Stores user information in MySQL database. System will calculate the total cost based on car type and days rented. Users can always update and cancel reservations, in which data for price and dates will be updated in MySQL database.",
        languages: ["Java", "Java Swing", "MySQL"],
        link: "https://github.com/kylaknauber/Car-Rental-Software",
        images: [carRentalSW],
        toggleView: false
    }
         */
import bingeIndexHome from "../images/binge-index.png"
import capstone from "../images/capstone.png"
import carRentalSW from "../images/car-rental.png"
import compilerOutput from "../images/compiler.png"
import flappyBird from "../images/flappy-bird.png"
import unoGame from "../images/uno.png"

export const projects = [
    {
        id: 1,
        name: "Binge Index",
        description: "Using my knowledge of React and JavaScript, I created a user friendly application which allows users to search for any movie, TV show, and person which is present in TMDB database. I used React Router for a robust navigation system, pull data and queries from TMDB web API, and implemented a log in system using Firebase Authentication. Users can favorite any item they choose which is securely stored in a Firestore Database. Pagination allows for efficient data retrieval to prevent slow rendering.",
        languages: ["React", "JavaScript", "React Router", "Firebase", "Web API", "CSS"],
        link: "https://github.com/kylaknauber/Binge-Index",
        images: [bingeIndexHome]
    },
    {
        id: 2,
        name: "UNO",
        description: "Using skills in React, JavaScript, and CSS to create an UNO game for a user to play against the computer. Each player is dealt 7 cards randomly, then the application randomly selects which player to begin the game, to which they place one of their dealt cards. The game continues until one user is left with no cards Single page react application focusing on conditional rendering to create a user-friendly and efficient game. Includes a simple Firebase connection to store user's name, score, and date if they wish to upload such data.",
        languages: ["React", "JavaScript", "Firebase", "CSS"],
        link: "https://github.com/kylaknauber/UNO-Game",
        images: [unoGame]
    },
    {
        id: 3,
        name: "Facial Paralysis Tracking Application",
        description: "Senior Capstone Project | Collaborated with a team to create a cross-platform application to assist patients and physicians in tracking facial paralysis recovery and treatment. Allows patients and physicians to communicate with each other asynchronously via a direct messaging system in the application. Used AI and ML technologies for the device camera to track lighting, faces, etc. to ensure quality images are uploaded and sent to physicians. Used Firebase to store patient and physician data along with patient images. React Native is the backbone of the front-end which allows for a smooth and efficient UI for web and mobile devices.",
        languages: ["React Native", "Firebase", "Node.js", "Google Cloud API", "TensorFlow", "BlazeFace"],
        link: "https://github.com/kylaknauber/Spring2025-GradingFacialParalysis",
        images: [capstone]
    },
    {
        id: 4,
        name: "Mini C Compiler",
        description: "Created a Mini C Compiler throughout Compilers class, including various sub projects like Tokenizer, Lexical Analyzer, Syntax Analyzer, Semantic Analyzer. Each project was created with Java, along with JFlex for the Lexical Analyzer, and BYACC/J for the bottom-up parser in the Semantic Analyzer. The Mini C Compiler tests Mini C code files for lexical errors, syntax errors, and semantic errors, in which a successful file would \"execute\" the said file.",
        languages: ["Java", "BYaccJ", "JFlex"],
        link: "https://github.com/kylaknauber/Mini-C-Compiler",
        images: [compilerOutput]
    },
    {
        id: 5,
        name: "Flappy Bird",
        description: "Recreated Flappy Bird which uses the same format as the original game. In order to play the game, the user would left click or press the space bar to start, and then navigate the bird through the pipes without hitting the ground or pipes. Users can submit their score to Firestore if they choose.",
        languages: ["Vue.js", "JavaScript", "HTML", "CSS", "Firebase"],
        link: "https://github.com/kylaknauber/Flappy-Bird",
        images: [flappyBird]
    },
    {
        id: 6,
        name: "Car Rental Software",
        description: "Simple GUI for user to create a reservation to rent a car. Stores user information in MySQL database. System will calculate the total cost based on car type and days rented. Users can always update and cancel reservations, in which data for price and dates will be updated in MySQL database.",
        languages: ["Java", "Java Swing", "MySQL"],
        link: "https://github.com/kylaknauber/Car-Rental-Software",
        images: [carRentalSW]
    }

]



// src/components/QuizHistory.js
import React, { useState } from 'react';
import './QuizHistory.css';

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([
    {
      id: 1,
      title: 'Quiz 1: HTML',
      score: '7/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What does HTML stand for?', isCorrect: true },
        { question: 'Q2', text: 'Which tag is used for creating a hyperlink?', isCorrect: false },
        { question: 'Q3', text: 'In HTML, what does the "alt" attribute stand for?', isCorrect: false },
      ],
      submissionTime: '2024-01-09T12:30:00', // Add submission time as a string
    },
    {
      id: 2, // Ensure unique IDs
      title: 'Quiz 2: SQL',
      score: '10/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What does SQL stand for?', isCorrect: true },
        { question: 'Q2', text: 'Which statement is used to insert new data in a database?', isCorrect: true },
        { question: 'Q3', text: 'What does the acronym "DDL" stand for in SQL?', isCorrect: true },
      ],
      submissionTime: '2024-01-09T14:45:00', // Add submission time as a string
    },
    {
      id: 2, // Ensure unique IDs
      title: 'Quiz 3: Docker',
      score: '9/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What is Docker Engine?',  isCorrect: true },
        { question: 'Q2', text: 'What is Docker compose?', isCorrect: true },
        { question: 'Q3', text: 'Which file is used to build Docker Image?', isCorrect: false },
      ],
      submissionTime: '2024-01-09T14:45:00', // Add submission time as a string
    },


    // Add more quiz history data as needed
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(selectedQuiz===quiz ? null:quiz);
  };

  return (
    <div className="quiz-history-container">
      <div className="quiz-history">
        <center>
          {/* <h2>Quiz History</h2> */}
        </center>
        <ul className="quiz-list">
          {quizHistory.map((quiz) => (
            <li
              key={quiz.id}
              className={`quiz-card ${selectedQuiz === quiz ? 'selected' : ''}`}
              onClick={() => handleQuizClick(quiz)}
              
            >
              <div className="quiz-header">
                <span>{quiz.title}</span>
              </div>
              <div className="quiz-details">
                <p>Score: {quiz.score}</p>
                <p>Questions: {quiz.questions}</p>
                <p>Difficulty: {quiz.difficulty}</p>
                <p>Time: {quiz.submissionTime}</p>
                
              </div>
              {selectedQuiz === quiz && (
                <div className="answers">
                  {quiz.answers.map((answer, index) => (
                    <div
                      key={index}
                      className={`answer ${answer.isCorrect ? 'correct' : 'wrong'}`}
                    >
                      {/* {answer.question}: {answer.text}  <span class="with-space">&nbsp;</span>
                      {answer.isCorrect ? '✔ ' : '✘ '} */}
                      {<span className="symbol">{answer.isCorrect ? '✔' : '✘'}</span>}
                      {<span className="question-text">{answer.question}: {answer.text}</span>}
                      
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizHistory;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./History.css";
// import bg1 from "./images/bg1.png";
// import Navbar from "./Navbar";

// const History = ({ userId, setUserId }) => {
//   const styles = {
//     background: {
//       backgroundImage: `url(${bg1})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       height: "50vh", // Adjust the height to make the image smaller
//       width: "50vw",
//       justifyContent: "center",
//       alignItems: "center",
//       color: "white",
//       textAlign: "center",
//       fontSize: "24px",
//       opacity: "0.7",
//     },

//     contained: {
//       width: "100vw",
//       height: "100vh",
//       display: "grid",
//       placeItems: "center",
//       alignItems: "center",
//       backgroundColor: "white"
//     },
//     text: {
//       fontSize: "larger",
//       color: "rgb(194 194 194)",
//       marginBottom: "-100px",
//     },
//   };

//   const [questionHistory, setQuestionHistory] = useState([]);
//   const navigate = useNavigate();
//   const toJSON = (str) => {
//     str = str
//       .replace(/OrderedDict\(\[\(/g, "{")
//       .replace(/\]\)/g, "}")
//       .replace(/\)/g, "")
//       .replace(/\(/g, "")
//       .replace(/t\'\,/g, "t':")
//       .replace(/'/g, '"')
//       .replace(/True/g, "true")
//       .replace(/False/g, "false");

//     var jsonArray = JSON.parse(str);

//     return jsonArray;
//   };



//   const fetchUserQuestionHistory = async () => {
//     try {
//       const userid =  localStorage.getItem('userId');

//       const response = await fetch(
//         `http://127.0.0.1:8000/api/questionhistoryget/?user_id=${userid}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();

//       setQuestionHistory(data);
//       console.log(data)

//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     if (!localStorage.getItem('token')){
//       navigate('/login')
//     }
//     fetchUserQuestionHistory();

//   }, []);

//   const [selectedQuiz, setSelectedQuiz] = useState(null);

//   const handleQuizClick = (quiz) => {
//     setSelectedQuiz(quiz);
//   };

//   function conversion(timestamp) {
//     const currentDate = new Date(timestamp);
//     const options = { timeZone: "Asia/Kolkata" };

//     const year = currentDate.toLocaleString("en-IN", { year: "numeric" });
//     const month = currentDate.toLocaleString("en-IN", { month: "2-digit" });
//     const day = currentDate.toLocaleString("en-IN", { day: "2-digit" });

//     const hours = currentDate.toLocaleString("en-IN", {
//       hour: "2-digit",
//       hour12: false,
//     });
//     const minutes = currentDate.toLocaleString("en-IN", { minute: "2-digit" });
//     const seconds = currentDate.toLocaleString("en-IN", { second: "2-digit" });

//     const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

//     return formattedDateTime;
//   }

//   return (
//     <>
//       <Navbar page={"History"} />

//       {questionHistory.length == 0 ? (
//         <div className="contained" style={styles.contained}>
//           <div className="text" style={styles.text}>
//             No history
//           </div>

//           <div className="background" style={styles.background}></div>
//         </div>
//       ) : (
//         <div className="quiz-history-container">
//           <div className="quiz-history">
//             <center>
//               {" "}
//               <h2>Quiz History</h2>{" "}
//             </center>
//             <ul className="quiz-list">
//               {questionHistory.map((quiz) => (
//                 <li
//                   key={quiz.id}
//                   className={`quiz-card ${
//                     selectedQuiz === quiz ? "selected" : ""
//                   }`}
//                   onClick={() => handleQuizClick(quiz)}
//                 >
//                   <div className="quiz-header">
//                     <span>{quiz.domain}</span>
//                   </div>
//                   <div className="quiz-details">
//                     <p>Score: {quiz.score}</p>
//                     <p>Difficulty: {quiz.difficulty_level}</p>
//                     <p>Time: {conversion(quiz.submission_time)}</p>
//                   </div>
//                   {selectedQuiz === quiz && (
//                     <div className="answers">
//                       {toJSON(selectedQuiz.attempted_questions).map(
//                         (attempt, index) => (
//                           <div
//                             key={index}
//                             className={`answer ${
//                               attempt.is_correct ? "correct" : "wrong"
//                             }`}
//                           >
//                             {attempt.q_text}{" "}
//                             <span className="with-space">&nbsp;</span>
//                             {attempt.is_correct ? "Correct" : "Wrong"}
//                           </div>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default History;


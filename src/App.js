
import React, { useState } from 'react';
import QuizHistory from './QuizHistory';
import './App.css'; // Import your global CSS file
import './QuizHistory.css'; // Import QuizHistory component-specific CSS
// import Navbar from "./Navbar";

function App() {
  const [activeTab, setActiveTab] = useState('quizHistory'); // Initial tab


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      {/* <h1>Quiz App</h1> */}
      <nav className="navbar">
        <button onClick={() => handleTabChange('quizHistory')}>Quiz History</button>
      </nav>

      {activeTab === 'quizHistory' && <QuizHistory />}
      
    </div>


  );
}


export default App;




// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import History from './History';
// import './History.css'; // Import your CSS file
// import Navbar from "./Navbar";
// import { useState } from "react";
// const App = () => {
//   const [user, setUser] = useState("");
//   const [userId, setUserId] = useState(0);
//   return (
 
//     <Router>
//       <div className="app">
//         <Navbar />
//       <Routes>
//       <Route
//           path="/history"
//           exact
//           element={<History user={user} setUser={setUser} 
//           userId = {userId}
//           setUserId = {setUserId}/>}
//         />

//       </Routes>
//       </div>

//     </Router>
//   );
// };

// export default App;


// App.js

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from './History';
import './History.css'; // Import your CSS file
import Navbar from "./Navbar";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  return (
    // <div className="app">
    //   <QuizHistory />
    //   <div className="QuizHistory-styles"></div>
    // </div>
    <Router>
      <div className="app">
        <Navbar />
      <Routes>
      <Route
          path="/History"
          exact
          element={<History user={user} setUser={setUser} 
          userId = {userId}
          setUserId = {setUserId}/>}
        />

      </Routes>
      </div>

    </Router>
  );
};

export default App;

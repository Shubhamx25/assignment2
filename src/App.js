import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import NewTicketPage from "./components/NewTicketPage";


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  
    const handleLogin = (username) => {
      setLoggedIn(true);
      setUsername(username);
    };
  
    return (

      <div className="main-container">
        {!loggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div>
            <Routes >
                <Route path="/" element={ <Landing username={username} />} />
                <Route path="/new-ticket" element={ <NewTicketPage />} />
            </Routes>
             
          </div>
        )}
      </div>
    );
  };
  
  export default App;
  
  
  
  
  
  
  
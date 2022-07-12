import './App.css';
import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Search1 from './components/Search1';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import axios from 'axios';




function App() {
  // set API response
  const [getMessage, setGetMessage] = useState([]);
  const [getStatus, setGetStatus] = useState("");
 
  const [getToken, setGetToken] = useState([]);

  //refresh getStatus so Links will work correctly
  useEffect (() =>{
    setGetStatus("");
  });

 // get flight data from Amadeus
  const searchHandler = (params) => {
    axios.get('http://localhost:5000/flask/search',params)
    .then(response =>{
      console.log(response);
      setGetMessage(response.data);
      setGetStatus(response.status);
    }).catch(error =>{
      console.error("Error: ", error);
    })
   
  }

  const signInHandler = (params) => {
    axios.post('http://localhost:5000/token', params)
    .then(response => {
      console.log("Success", response);
    }).catch(error => {
      console.log("Error: ", error)
    })
  }


  return (
    <Router>
      <div className= "navbar">
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/s">Search1</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/sign-in">SignIn</Link>
        </li>
        <li>
          <Link to="/sign-up">SignUp</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <hr />
      {getStatus===200 && (
        <Navigate to="/searchResults" />
      )}
      <Routes>
        <Route path="/" element={<Search onSearch={searchHandler}/>} />
        <Route 
          path="/searchResults" 
          element={
            <ResultList data={getMessage}/>
          } 
        /> 
        <Route path="/s" element={<Search1/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<SignIn onSubmitUser={signInHandler}/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes >
      </div>
    </Router>
  );
}

export default App;


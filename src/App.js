import './App.css';
import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
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
 
  //refresh getStatus so Links will work correctly
  useEffect (() =>{
    setGetStatus("");
  });

 // get flight data from Amadeus
  const searchHandler = (params) => {
    axios.get('http://localhost:5000/flask/search', params)
    .then(response =>{
      console.log(response);
      setGetMessage(response.data);
      setGetStatus(response.status);
    }).catch(error =>{
      console.error("Error: ", error);
    })
   
  }



  ///  {/* <Navigator /> */}
   // <ResultList data={getMessage}/> 
   //  <Route path="/" element={<Search onSearch={searchHandler}/>} />
  return (
    <Router>
    <div className= "navbar">
      <ul>
        <li>
          <Link  to="/">Search</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
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
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes >
    
    </div>
    </Router>
  );
}
//<Link to="/" onClick={() => props.closeNav()}>Home</Link>
export default App;


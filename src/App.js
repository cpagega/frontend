import './App.css';
import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios';



function App() {
  const [getMessage, setGetMessage] = useState('');
  const searchHandler = (params) => {
    axios.get('http://localhost:5000/flask/search', params)
    .then(response =>{
      console.log(response.data);
      setGetMessage(response.data);
    }).catch(error =>{
      console.error("Error: ", error);
    })
  }


  return (
    <div>
    {/* <Navigator /> */}
    <Search onSearch={searchHandler}/>

    </div>
  );
}

export default App;

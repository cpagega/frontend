import './App.css';
import Search from './components/Search';
import NumberOfAdults from './components/Numberofadults';
import background from './flight-bg.jpg';


function App() {

  const searchHandler = (params) => {
    
  }

  return (
    <div style= {{
      backgroundImage: `url(${background})`
      }}>
    {/* <Navigator /> */}
    <NumberOfAdults />
    <Search onSearch={searchHandler}/>
 
    </div>
  );
}

export default App;

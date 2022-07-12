import React, {useState} from 'react';
import './Search.css';
import NumberOfAdults from './Numberofadults';


const Search = (props) => {

    const [searchData, setSearchData] = useState({
        search: "",
        startDate: "",
        endDate: "",
        numAdults: "1"
    });

    const handleSearch = (e) => {
        setSearchData(previousState => {
            return {...previousState, search: e.target.value}
        });
    }

    const handleStartDate = e => {
        setSearchData(previousState => {
            return {...previousState, startDate: e.target.value}
        });
    }

    const handleEndDate = e => {
        setSearchData(previousState => {
            return {...previousState, endDate: e.target.value}
        });
    }

    const handleSelect = param => {
       
        setSearchData(previousState => {
            return {...previousState, numAdults: param};
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch({params:searchData});
        setSearchData(previousState => {
            return{...previousState, 
                    search: "",
                    startDate: "",
                    endDate: ""
                    };
        });
        
    } 

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <NumberOfAdults onSelection={handleSelect}/>
                <input value={searchData.search} onChange={handleSearch} type='text' placeholder="Search airport code..." className='search-entry' />
                <input value={searchData.startDate} onChange={handleStartDate} type='date' className='search-date-start'/>
                <input value={searchData.endDate} onChange={handleEndDate} type='date' className='search-date-end'/>
                <button type='submit' className="search-button">Search</button>         
            </form>
        </div>

    );
    
}

export default Search;
import React, {useState} from 'react';
import './Search.css';

const Search = (props) => {
    
    const [searchData, setSearchData] = useState({
        search: "",
        startDate: "",
        endDate: ""
    });

    const handleSearch = (e) => {
        setSearchData(previousState => {
            return {...previousState, search: e.target.value}
        });
    }

    const handleStartDate = e => {
        setSearchData(previousState => {
            return {...previousState, startDate: new Date(e.target.value)}
        });
    }

    const handleEndDate = e => {
        setSearchData(previousState => {
            return {...previousState, endDate: new Date(e.target.value)}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(searchData);
    } 

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleSearch} type='text' placeholder="Search..." className='search-entry' />
                <input onChange={handleStartDate} type='date' className='search-date-start'/>
                <input onChange={handleEndDate} type='date' className='search-date-end'/>
                <button type='submit' className="search-button">Search</button>         
            </form>
        </div>

    );
    
}

export default Search;
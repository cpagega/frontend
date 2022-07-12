import React, {useState} from 'react';
import './css/Search1.css';
import NumberOfAdults from './Numberofadults';


const Search1 = (props) => {

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
        <body>
        <div className="container">

            <div className="search_content">
                <div className="info">
                    <h2>Travel Search</h2>
                    <p>Lorem ipsum dolor sit.</p>
                </div>

                <form onSubmit={handleSubmit}>
                <div className="search_entry">
                    <div class="entry">
                        <input value={searchData.search} onChange={handleSearch} type='text' placeholder="Search airport code..." className='search-entry' />
                    </div>
                    <div class="entry">
                        <input value={searchData.startDate} onChange={handleStartDate} type='date' className='search-date-start'/>
                    </div>
                    <div class="entry">
                        <input value={searchData.endDate} onChange={handleEndDate} type='date' className='search-date-end'/>
                    </div>
                    <div class="item">
                        <button type='submit' className="search-button">Search</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </body>
    );
    
}

export default Search1;
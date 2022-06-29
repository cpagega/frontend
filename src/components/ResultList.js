import React from 'react';
import './ResultList.css';
import Result from './Result';

const ResultList = (props) => {
    return (
        <div className='resultlist'>
        {props.data.map(offer => 
        offer.itineraries.map(itinerary => 
        itinerary.segments.map(segment => <Result 
            key={offer.id}
            departDate={segment.departure.at}
            arriveDate={segment.arrival.at}
            departCode={segment.departure.iataCode}
            arriveCode={segment.arrival.iataCode}        
        />)    
        
        )

       )}
        </div>
    );
}

export default ResultList;
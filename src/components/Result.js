import React from 'react';
import './Result.css';

const Result = (props) => {
    return (
    <div className='result'>
        <h4>Departure Date: {props.departDate}</h4>
        <h4>Arrival Date: {props.arriveDate}</h4>
        <h4>From: {props.departCode}</h4>
        <h4>To: {props.arriveCode}</h4>
    </div>
    
    );
}

export default Result;
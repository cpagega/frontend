import React from 'react';
import './Numberofadults.css';
const NumberOfAdults = () => {
    return (
    <div className='dropdown'>
        <select class>
            <option value = {1} selected>1 Adult</option>
            <option value = {2}>2 Adults</option>
            <option value = {3}>3 Adults</option>
            <option value = {4}>4 Adults</option>
            <option value = {5}>4+ Adults</option>
        </select>
    </div>
    );
}

export default NumberOfAdults;
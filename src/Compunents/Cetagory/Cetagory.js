import React, { useContext } from 'react';
import { cetagoryContext } from '../../App';
import Fooditems from '../Fooditems/Fooditems';

const Cetagory = () => {
    const [cetagory, setCetagory] = useContext(cetagoryContext)
    return (
        <div>
            <h1>Show selected Cetagory : {cetagory}</h1>
            <button onClick={() => setCetagory("breakfast")}>Breakfast</button>
            <button onClick={() => setCetagory("lunch")}>Lunch</button>
            <button onClick={() => setCetagory("dinner")}>Dinner</button>
            <Fooditems></Fooditems>
        </div>
    );
};

export default Cetagory;
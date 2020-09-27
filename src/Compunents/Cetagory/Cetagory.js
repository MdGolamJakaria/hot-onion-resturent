import React, { useContext } from 'react';
import { cetagoryContext } from '../../App';
import Fooditems from '../Fooditems/Fooditems';
import './Cetagory.css'

const Cetagory = () => {
    const [cetagory, setCetagory] = useContext(cetagoryContext)
    return (
        <div className='container text-center'>
            <br />
            <button className='cet-btns' onClick={() => setCetagory("breakfast")}>Breakfast</button>
            <button className='cet-btns' onClick={() => setCetagory("lunch")}>Lunch</button>
            <button className='cet-btns' onClick={() => setCetagory("dinner")}>Dinner</button>
            <Fooditems></Fooditems>
        </div>
    );
};

export default Cetagory;
import React, { useContext, useEffect, useState } from 'react';
import { button } from 'react-router-dom';
import { cetagoryContext } from '../../App';
import foods from '../../fackData/fackData';
import Food from '../Food/Food';
import './Fooditems.css'

const Fooditems = () => {
    const [cetagory] = useContext(cetagoryContext);

    const [food, setFood] = useState()

    useEffect(() => {
        const meatchedFoods = foods.filter(foods => foods.cetagory === cetagory)
        setFood(meatchedFoods)
    }, [cetagory])

    return (
        <div className='container'>
            <div className="text-center mt-3">

            </div>
            <br />
            <div className="row row-cols-1 row-cols-md-3">

                {
                    console.log(food)
                    // food.map(food => <Food food={food} key={food.id} ></Food>)
                }

            </div>


        </div>
    );
};

export default Fooditems;
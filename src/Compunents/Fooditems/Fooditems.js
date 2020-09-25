import React, { useEffect } from 'react';
import foods from '../../fackData/fackData';

const Fooditems = () => {

    console.log(foods)

    return (
        <div>
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
    );
};

export default Fooditems;
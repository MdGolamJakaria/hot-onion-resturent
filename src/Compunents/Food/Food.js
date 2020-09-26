import React from 'react';

const Food = (props) => {
    const { name, image, description, price } = props.food
    return (

        <div className="col mb-4">
            <div className="card h-100 pt-3">
                <img src={image} className="card-img-top w-50 m-auto"  alt="product images" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">{price}</h6>
                </div>
            </div>
        </div>


    );
};

export default Food;
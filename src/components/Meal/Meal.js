import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import "./Meal.css"

const Meal = ({ meal }) => {


    const navigate = useNavigate();
    const handleEvent = () => {
        const path = `/meal/${meal.idMeal}`;
        navigate(path);
    }

    return (
        <div className='meal-container'>
            <img className='w-80 h-80 ml-10 mt-3' src={meal.strMealThumb} alt="" />
            <div>
                <h3>Item Name:{meal.strMeal}</h3>
                <h4>Category:{meal.strCategory}</h4>
            </div>
            <Link to={'/meal/' + meal.idMeal}>See more</Link>
            <button onClick={handleEvent} className='button text-white'>See Details</button>
        </div>
    );
};

export default Meal;
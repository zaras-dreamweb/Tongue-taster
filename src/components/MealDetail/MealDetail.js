import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MealDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, []);
    return (
        <div>
            <h1 className='text-2xl h-20 mt-20 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300  to-blue-900'>Meal detail about: {id}</h1>
            <div className="main-div mx-auto pt-20 pb-24 px-4 md:px-2 max-w-7xl grid grid-cols-1 md:grid-cols-2 justify-items-center content-center">

                <div className="img-div flex justify-center items-center w-80 h-80 border-4">
                    <img src={meal.strMealThumb} alt="" />
                </div>
                <div className="info text-2xl pt-16">
                    <h2><strong>Name:</strong> {meal.strMeal}</h2>
                    <h2><strong>Serving Category:</strong> {meal.strCategory}</h2>
                    <h2><strong>Country of Origin:</strong> {meal.strArea}</h2>
                </div>

            </div>
        </div>
    );
};

export default MealDetail;
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);




    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Search For food</h2>
            <input onChange={searchFood} type="text" name="" id="" />
            <h3>Result Found: {meals.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 pt-20 '>
                {
                    meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;
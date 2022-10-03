import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Food = ({food, handleAddToCart}) => {
    const {strMealThumb, strMeal, strInstructions} = food;
    return (
        <div className='border border-orange-100 shadow-lg shadow-orange-100 rounded-lg'>
            <div className='p-4'><img className='rounded-lg' src={strMealThumb} alt=''></img></div>
            <div className='px-4 pb-4'>
                <h4 className='text-2xl font-semibold mb-3'>{strMeal}</h4>
                <p className='text-justify'>{strInstructions.slice(0, 350) + '..'}</p>
                <button onClick={() => handleAddToCart(food)} className="bg-orange-300 hover:bg-orange-400 text-white w-full py-2 mt-4 rounded-lg font-medium">Select Food <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Food;
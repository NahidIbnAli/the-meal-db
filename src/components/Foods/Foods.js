import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import Header from '../Header/Header';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [])

    const handleAddToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
    }

    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-4/5 px-8 lg:px-20'>
                <Header></Header>
                <h3 className='text-3xl font-medium'>My meals</h3>
                <div className='grid lg:grid-cols-3 gap-6 my-8'>
                    {
                        foods.map(food => <Food food={food} key={food.idMeal} handleAddToCart={handleAddToCart}></Food>)
                    }
                </div>
            </div>
            <div className='lg:w-1/5 bg-orange-100'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Foods;
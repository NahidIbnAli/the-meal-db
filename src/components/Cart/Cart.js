import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='lg:sticky top-0'>
            <h2 className='font-semibold text-3xl text-center py-5'>Selected Food</h2>
            <div className='px-8'>
                {
                    cart.map(food => <p className='font-medium'>{food.strMeal}</p>)
                }
            </div>
        </div>
    );
};

export default Cart;
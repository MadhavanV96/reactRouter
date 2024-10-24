import React from 'react';
import Card from './Card';

const Home = ({products,addToCart}) => {
    // console.log(products);
    
    return (
        <div className='flex flex-wrap w-[80%] mx-auto'>
            {
            products.map((item)=>(
                <div key={item}>

                    <Card product={item} addToCart={addToCart} />
                
                </div>
            ))
            }
        </div>
    );
};

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({cart}) => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between flex-wrap px-[32px] py-[32px] w-[80%] mx-auto cursor-pointer bg-black text-white '>
            <h2 onClick={()=>{ navigate('/')
            }} className='font-black text-2xl transition-all duration-500 hover:text-yellow-500 '>Home</h2>
            <div className="relative flex items-center cursor-pointer" onClick={()=>{
navigate('/cart')
            }}>
                
                <span className="ms-3 rounded-[50%] relative left-[70px] top-[-20px] bg-white px-[0.85em] py-[0.6em] text-[1 rem] font-bold leading-none text-black  transition-all duration-500 hover:bg-yellow-400 hover:text-black " >{cart.length}</span>
                <span className="[&>svg]:w-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                </span>
        
            </div>
            
        </div>
    );
};

export default Navbar;
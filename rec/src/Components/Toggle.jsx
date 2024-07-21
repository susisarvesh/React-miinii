import React, { useState } from 'react';

function Toggle() {
    const [value, setValue] = useState(false);
    const [shop, setShop] = useState("Shop Details");

    const handleClick = () => { 
        setValue((prev) => !prev);
        setShop((prev) => prev === "Shop Details" ? "Close" : "Shop Details");
    };

    return (
        <div className='p-3 relative'>
            <button 
                onClick={handleClick} 
                className='bg-blue-300 p-1 text-white rounded-lg'
            >
                {shop}
            </button>
            { 
                value && (
                    <div 
                        className='fixed inset-0 flex justify-center items-center bg-slate-400 h-[100vh] mt-2 rounded-lg z-50'
                    >
                        Heleleele
                        <button className='bg-blue-300 p-1 text-white rounded-lg' onClick={handleClick}  >{shop}</button>
                    </div>
                )
            }
            <div>
                <p>sdasd</p>
            </div>
        </div>
    );
}

export default Toggle;

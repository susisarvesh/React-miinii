import React, { useState } from 'react'

function Counter({name}) {
    const [count, setCount] = useState(0);
    const [hide, SetHide] = useState(false)
    const handleClick = () => { 
       
        setCount((prev) => prev + 1)
       
        
    }
    const handleClicks = () => { 
       
        setCount((prev) => prev - 1)
         SetHide(true)
        
    }
  return (
      <div>
          <p>{count}</p>
          {name}
          <button onClick={handleClick} className={`bg-red-300 {hide} ${hide ?"bg-red-200":"bg-green-400"}`}>Click</button>
            <button onClick={handleClicks}>Click Minus</button>
    </div>
  )
}

export default Counter
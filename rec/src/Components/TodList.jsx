import  { useState } from 'react'

function TodList() {
    const [value, setValue] = useState('');
    const [todo,setTodo] = useState([])
    const handleValue = (e) => { 
        setValue(e.target.value)
    }
    const handleTodo = () => {
        if (value == '') { 
            alert("enter some value")
        }
        setTodo((prev) => [...prev, value])
        setValue('');
    } 
    const handleDelete = (index) => { 
       const newTodos = todo.filter((item, i) => i !== index); //item is the current value
        setTodo(newTodos);
    }
  return (
      <div className='flex flex-col justify-center items-center p-5'>
          <div>
          <input type="text" className='bg-red-400 w-60 h-10 rounded-lg p-2 text-white outline-none' value={value}
          onChange={handleValue}
          />
          <button className='p-2 bg-slate-950 rounded-md m-2 text-white' onClick={handleTodo}>Add</button>
          </div>
          <div>
             <ul>
                  {todo.map((item, index) => (
                        <>
                        <li key={index} className='text-white bg-black p-5 rounded-lg m-1'>
                            {item}
                          </li>
                          <button onClick={() => { handleDelete(index) }}>Delete</button>
                          </>
                    ))}
                </ul>
          </div>
      </div>
  )
}

export default TodList
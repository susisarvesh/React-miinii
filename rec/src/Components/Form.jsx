import  { useState } from 'react';

function Form() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        phno: ""
    });
    const [result, setResult] = useState("");

    // Handle changes for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleresult = () => { 
        setResult(value.name)
    }
    return (
        <div className='flex flex-col m-2 p-10 justify-between items-center'>
            <p>Name</p>
            <input 
                type="text" 
                name="name"
                className='bg-red-400 w-60 h-10 rounded-lg p-2 m-2 text-white outline-none' 
                value={value.name}
                onChange={handleChange}
            />
            <p>Email</p>
            <input 
                type="email" 
                name="email"
                className='bg-red-400 w-60 h-10 rounded-lg p-2 m-2 text-white outline-none'
                value={value.email}
                onChange={handleChange}
            />
            <p>Phone Number</p>
            <input 
                type="number" 
                name="phno"
                className='bg-red-400 w-60 h-10 rounded-lg p-2 m-2 text-white outline-none' 
                value={value.phno}
                onChange={handleChange}
            />
            <button onClick={handleresult}>Get Name</button>
          
            { result}
        </div>
    );
}

export default Form;

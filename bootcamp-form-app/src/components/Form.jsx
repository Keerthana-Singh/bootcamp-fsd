import { useState } from "react";

function Form({addUser}) {
    const [name, setName] = useState(""); // State to hold the input value 

    const handleSubmit = (e) => { // Handle form submission - arrow function
        e.preventDefault(); // prevent page refresh 
        addUser(name); // send data to parent 
        setName(""); // clear input 
    };

    // event handler & JSX 
    return (
        <form onSubmit={handleSubmit}>  
            <input
                type="text"
                value={name}    
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)} // update state 
            />
            <button type="submit">Add User</button>
        </form>
    );
}

export default Form;
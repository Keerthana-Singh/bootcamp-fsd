import { useState, useEffect } from "react"; 
import Form from "./components/Form";
import LocalData from "./components/LocalData";

function App() {
    const [users, setUsers] = useState([]); // State to hold user data

    useEffect(() => { // useEffect to load data on mount 
        const stored = JSON.parse(localStorage.getItem("users")) || []; // get data from localStorage 
        setUsers(stored); // update state 
    }, []); 

    
    const addUser = (name) => { // Function to add user
        const updated  = [...users, name];
        setUsers(updated); // update state
        localStorage.setItem("users", JSON.stringify(updated)); // save to localStorage 
    }

    return (
        <div>
            <h1>Bootcamp Form App</h1>
            <Form addUser={addUser} /> 

            <LocalData users={users} /> 
        </div>
    );
}       

export default App; 
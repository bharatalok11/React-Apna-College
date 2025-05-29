import { useState } from "react";

export default function Form() {
    let [formData,setFormData] = useState({
        fullName : "",
        username : "",
        password : ""
    });
    
    let handleInputChange = (event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return {...currData, [fieldName]: newValue};
        });
    }

    let handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            username : "",
            password : ""
        });
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input type="text" 
                   placeholder="Enter your full name : " 
                   value={formData.fullName}
                   onChange={handleInputChange}
                   id="fullName"
                   // value of name field should match the field of state variable
                   // this is important because when we will do event.target.name in common handler function this wil give output as whatever value 
                   // written (eg fullName) and this will be used to access the state variable key
                   // because state variable is an object. so we need a key to access that will be our name
                   name="fullName"
            />
            <label htmlFor="username">username: </label>
            <input type="text" 
                   placeholder="Enter username : " 
                   value={formData.username}
                   onChange={handleInputChange}
                   id="username"
                   name="username"
            />
            <label htmlFor="password">password: </label>
            <input type="password" 
                   placeholder="Enter password : " 
                   value={formData.password}
                   onChange={handleInputChange}
                   id="password"
                   name="password"
            />
            <button>Submit</button>
        </form>
    );
}
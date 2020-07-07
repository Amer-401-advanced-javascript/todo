import React, { useState } from 'react';

const useForm = (callback) => {
    const [value, setValue] = useState({})


    const handleInputChange = event => {
        setValue({[event.target.name]:event.target.value})        
    }
    
    const handleSubmit = event =>{
        if(event) event.preventDefault();
        event.target.reset();
        callback(value)
      
    }
    return[handleSubmit, handleInputChange]
}
export default useForm;

// const handleInputChange = (e) => {
//     setItem({ ...item, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     props.handleSubmit(item);
//     setItem({ item });
//   };
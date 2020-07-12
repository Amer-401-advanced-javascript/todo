import { useState } from 'react';

const useForm = (callback) => {
    const [value, setValue] = useState({})


    const handleInputChange = event => {        
        setValue({...value,[event.target.name]:event.target.value})        
    }

    const handleSubmit = event =>{
        if(event) event.preventDefault(); 
        event.target.reset();
        setValue({})       
        callback(value)
    }
    return[handleSubmit, handleInputChange]
}
export default useForm;
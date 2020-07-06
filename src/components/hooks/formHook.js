import React, { useState } from 'react';

const useForm = (callback) => {
    const [value, setValue] = useState({})

    const handleSubmit = event =>{
        if(event) event.preventDefault();
        callback()
    }
}

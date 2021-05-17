import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const HSMContext = createContext();

const HSMProvider = (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/user`)
        .then(response => {
            console.log(response);
            setUser(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <HSMContext.Provider value={user}>
            {props.children}
        </HSMContext.Provider>
    )
}

export { HSMContext, HSMProvider };

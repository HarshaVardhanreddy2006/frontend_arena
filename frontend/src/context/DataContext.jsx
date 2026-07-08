import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import {toast} from 'react-toastify'

export const DataContext=createContext();


const DataContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [token,setToken]=useState(localStorage.getItem('token') || "")
    

    console.log(token);



    const value = {
        token,setToken,backendUrl
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
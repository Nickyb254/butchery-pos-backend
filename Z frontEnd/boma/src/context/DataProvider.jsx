import { useState, useEffect, createContext } from "react";
import axiosInstance from '../api/axios';

const DataContext = createContext()

export const DataProvider = ({children})=>{

    const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        if(fetchData){
             axiosInstance.get('/stock')
        .then(response => {
            setStock(response.data.doc)
            setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
        })      
        .catch((error) => {
            console.log(error);
        })
        }
    },[fetchData])

    return(
        <DataContext.Provider value={{
            stock
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
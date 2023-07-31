/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { API } from '../API'
export const ShopContext = createContext()
export function ShopContextProvider({ children }) {
    const [Count, setCount] = useState(0)
    const [Items, setItems] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API)
                const data = await response.json()
                setItems(data)
                console.log(data)
            } catch (error) {
                console.log(`oh no hermano, algo salio mal: ${error}`);
            }
        }
        fetchData()
    }, [])
    return (
        <ShopContext.Provider
            value={{
                Count,
                setCount,
                Items,
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}



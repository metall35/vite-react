/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { API } from '../API'
//create context
export const ShopContext = createContext()

export function ShopContextProvider({ children }) {
    //count from shopping card
    const [Count, setCount] = useState(0)
    //carditems
    const [Items, setItems] = useState(null)
    //modal
    const [openModal, setOpenModal] = useState(false)
    //product datail
    const [productShow, setProductShow] = useState({})
    //effect APi
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API)
                const data = await response.json()
                setItems(data)
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
                productShow,
                setProductShow,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}



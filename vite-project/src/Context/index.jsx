/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { API } from '../API'
//create context
export const ShopContext = createContext()

export function ShopContextProvider({ children }) {
    //count from shopping card
    const [count, setCount] = useState(0)
    //carditems
    const [items, setItems] = useState(null)
    //modal
    const [openModal, setOpenModal] = useState(false)
    const [openModalCard, setOpenModalCard] = useState(false)
    //product datail
    const [productShow, setProductShow] = useState({})
    //shopping card
    const [cardProducts, setCardProducts] = useState([])
    //LOADING
    const [Loading, setLoading] = useState(true)
    console.log(Loading);
    //effect APi
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API)
                const data = await response.json()
                setItems(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(`oh no hermano, algo salio mal: ${error}`);
            }
        }
        fetchData()
    }, []) 
    return (
        <ShopContext.Provider
            value={{
                count,
                setCount,
                items,
                openModal,
                setOpenModal,
                productShow,
                setProductShow,
                cardProducts,
                setCardProducts,
                openModalCard,
                setOpenModalCard,
                Loading,
                setLoading
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}



import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon} from "@heroicons/react/24/outline";
function CheckoutSideMenu() {
    const { setOpenModalCard,setCount,count} = useContext(ShopContext)
    const addcard = () => {
        setCount(count + 1)
        setOpenModalCard(false)
    }
    return (
        <aside className="product-detail flex flex-col border border-black rounded-lg m-4 bg-white h-auto w-[80%] sm:w-[80%] md:w-[85%] md:h-max-[90%] lg:w-[65%]">
            <div className="flex justify-between items-center py-1 px-2">
                <h2 className=" font-medium  text-xl">My Order</h2>
                <button className="" onClick={() => addcard()}><XMarkIcon className="h-6 w-6 text-black hover:text-red-500" /></button>
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu
import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
function ProductDetail() {
    const {setOpenModal} = useContext(ShopContext)
    return (
        <aside className="product-detail flex flex-col border border-black rounded-lg bg-white w-[420px] h-[calc(100vh-240px)]">
        <div className="flex justify-between items-center py-1 px-2">
            <h2 className=" font-medium  text-xl">Details</h2>
            <button className="" onClick={()=>setOpenModal(false)}><XMarkIcon className="h-6 w-6 text-black hover:text-red-500"/></button>
        </div>
        </aside>
    )
}

export default ProductDetail
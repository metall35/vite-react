import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
function ProductDetail() {
    const { setOpenModal, productShow,setCount,Count} = useContext(ShopContext)
    const addcard = () => {
        setCount(Count + 1)
        setOpenModal(false)
    }
    return (
        <aside className="product-detail flex flex-col border border-black rounded-lg bg-white w-[380px] h-[calc(100vh-180px)]">
            <div className="flex justify-between items-center py-1 px-2">
                <h2 className=" font-medium  text-xl">Details</h2>
                <button className="" onClick={() => setOpenModal(false)}><XMarkIcon className="h-6 w-6 text-black hover:text-red-500" /></button>
            </div>
            <figure className="flex items-center flex-col m-2 p-2 rounded-t-lg">
                <img 
                className="w-[80%] h-[320px] "
                src={productShow.image} 
                alt={productShow.title} />
            </figure>
                <p className="flex flex-col px-3 py-0 mt-4">
                    <span className="text-lg font-light my-2">{productShow.title}</span>
                    <span className="text-md font-medium ">Price: ${productShow.price}</span>
                    <span className="text-md font-normal my-1">Description:</span>
                    <span className="text-sm font-light my-1">{productShow.description}</span>
                </p>
                <button>
                <button
                    className=" w-[80%] hover:scale-[1.1] rounded-full bg-slate-200 py-2 my-3"
                    onClick={() => addcard()}
                >
                    Add Card
                </button>
                </button>
        </aside>
    )
}

export default ProductDetail
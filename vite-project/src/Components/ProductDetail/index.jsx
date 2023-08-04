import { useContext } from "react";
import { ShopContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
function ProductDetail() {
    const { setOpenModal, productShow, setCount, count } = useContext(ShopContext)
    const addcard = () => {
        setCount(count + 1)
        setOpenModal(false)
    }
    return (
        <aside className="product-detail flex flex-col border border-black rounded-lg m-4 bg-white h-[95%] w-[95%] sm:w-[90%] md:w-[85%] md:max-h-[90%] lg:w-[65%] max-h-max ">
            <div className="flex justify-between items-center py-1 px-2">
                <h2 className=" font-medium  text-xl">Details</h2>
                <button className="" onClick={() => setOpenModal(false)}><XMarkIcon className="h-6 w-6 text-black hover:text-red-500" /></button>
            </div>
            <figure className="flex items-center flex-col m-2 p-2 rounded-t-lg">
                <img
                    className="max-h-40 sm:max-h-32 md:max-h-48 max-w-60 lg:max-h-60"
                    src={productShow.image}
                    alt={productShow.title} />
            </figure>
            <p className="flex flex-col px-3 py-0 mt-4">
                <span className="text-lg font-light my-2">{productShow.title}</span>
                <span className="text-md font-medium ">Price: ${productShow.price}</span>
                <span className="text-md font-normal my-1">Description:</span>
                <span className="my-1 text-sm font-light text-ellipsis  overflow-hidden h-[80px]">{productShow.description}</span>
            </p>
            <button>
                <button
                    className=" w-[80%] hover:scale-[1.1] rounded-full bg-slate-200 py-2 my-3 mx-1"
                    onClick={() => addcard()}
                >
                    Add Card
                </button>
            </button>
        </aside>
    )
}

export default ProductDetail
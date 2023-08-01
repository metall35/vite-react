import { useContext } from "react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { ShopContext } from "../../Context";
function Card(data) {
    const {
        Count,
        setCount,
        openModal,
        setOpenModal
    } = useContext(ShopContext)
    return (
        <div 
        className=" cursor-pointer w-60 h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.006]"
        
        >
            <figure className=" relative mb-2 w-full h-5/6 overflow-hidden rounded-t-lg  "  >
                <img
                    src={data.data.images[0]} alt="HeadPhones"
                    className="w-full h-full object-cover rounded-t-lg hover:scale-[1.05] duration-300 transition ease-in-out delay-150 "
                    onClick={() => {
                        !openModal ? setOpenModal(true) : setOpenModal(false)
                    }}
                />
                    <span className="absolute bottom-2 left-1 rounded-full px-1 bg-white/50 text-sm">{data.data.category.name}</span>
                <button
                    className=" absolute top-2 right-1 flex justify-center items-center w-5 h-5 hover:scale-[1.1] rounded-full bg-white/70"
                    onClick={() => setCount(Count + 1)}
                >
                    <PlusSmallIcon className="h-4 w-4 text-black/80"/>
                </button>
            </figure>
            <p className="flex justify-betwen px-3 py-0">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-sm font-medium ">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card
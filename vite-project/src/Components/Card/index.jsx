
function Card() {
    return(
        <div className=" cursor-pointer w-60 h-72 rounded-xl shadow-lg hover:scale-[1.01]">
            <figure className=" relative mb-2 w-fit h-4/5 overflow-hidden rounded-t-lg  " >
                <span className="absolute bottom-2 left-1 rounded-full px-1 backdrop-brightness-200 bg-white/80">Electronics</span>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VP8YLl4rqGT1FByGWt00dUIzfXJ2pb_GlA&usqp=CAU" alt="HeadPhones" 
                className="w-full h-full "
                />
                <div className=" absolute top-2 right-1 flex justify-center items-center w-6 h-6 rounded-full backdrop-blur-sm bg-white/70">
                    +
                </div>
            </figure>
            <p className="flex justify-between px-3 py-0">
                <span>HeadPhones</span>
                <span>$300</span>
            </p>
        </div>
    )
}
export default Card
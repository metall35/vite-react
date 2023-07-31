import { createPortal } from "react-dom";

function Modal({children}) {
    return createPortal(
        <div className=" bg-black/5 flex justify-center items-center top-0 bottom-0 right-0 left-0">
        {children}
        </div>,
        document.getElementById('Product-Details')
    )
}

export default Modal
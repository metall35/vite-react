import { createPortal } from "react-dom";

function Modal({children}) {
    return createPortal(
        <div className=" bg-black/20  flex justify-center fixed items-center top-0 bottom-0 right-0 left-0">
        {children}
        </div>,
        document.getElementById('Product-Details')
    )
}

export default Modal
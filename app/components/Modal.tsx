import React from 'react'

interface modalProps {
    modalOpen: boolean
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<modalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <div>
            {/* <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button> */}
            {/* <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
                    
                </form>
            </dialog> */}

            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div  className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box relative">
    <label onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    {children}
  </div>
</div>
        </div>
    )
}

export default Modal
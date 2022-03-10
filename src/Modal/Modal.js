import React from "react"
import "./Modal.css"

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className = "modal">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title"> Showdle </h4>
                </div>
                <div className = "modal-body">
                    contents
                </div>
                <div className = "modal-footer">
                    <button onClick = {props.onClose} className = "button"> close</button>
                </div>
            </div>
        </div>
    
    )
}

export default Modal;
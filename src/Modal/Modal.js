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
                    <h4 className = "modal-title"> Show </h4>
                </div>
                <div className = "modal-body">
                    contents
                    <br></br>
                    <button onClick = {props.setDifficulty}>Hint</button>
                    <br></br>
                    <h1 className = {props.diff? "hint-y" : "hint-n"} >
                        The Hint
                    </h1>
                </div>
                <div className = "modal-footer">
                    <button onClick = {props.onClose} className = "button"> close</button>
                </div>

            </div>
        </div>
    
    )
}

export default Modal;
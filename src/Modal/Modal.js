import React from "react"


const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className = "modal">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title"> Title</h4>
                </div>
                <div className = "modal-body">
                    contents
                </div>
                <div className = "modal-footer">
                    <button className = "button"> close</button>
                </div>
            </div>
        </div>
    
    )
}

export default Modal;
import React from "react"
import Modal from 'react-bootstrap/Modal'


const AboutModal = (props) => {
    if (!props.show) {
        return null
    }

    

    return (
        <Modal show = {props.show}>
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
        </Modal>
    
    )
}

export default AboutModal;
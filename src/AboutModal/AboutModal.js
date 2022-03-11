import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"
import "./AboutModal.css"
const AboutModal = (props) => {
    const handleClose = () => {
        props.onClose(false)
    }

    const setDiff = () => {
        props.setDifficulty(true)
    }
    return (
        <Modal show = {props.show} >
            <Modal.Header closeButton onClick = {handleClose}>
                <Modal.Title>
                    Showdle
                </Modal.Title>
            </Modal.Header>

            <Modal.Body onClick = {handleClose}>
                <p>stuff about the game</p>
            </Modal.Body>

            <Modal.Body>

                <Button variant = "primary" className="btn margin-right" onClick = {setDiff}>
                    Hint?
                </Button>
                <p className = {props.diff? "hint-y":"hint-n"}>
                    The Hint
                </p>

                
            </Modal.Body>

            

        </Modal>
    
    )
}

export default AboutModal;
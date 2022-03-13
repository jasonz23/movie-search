import React from "react"
import {Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import "./AboutModal.css"
const AboutModal = (props) => {
    const handleClose = () => {
        props.onClose(false)
    }

    const setDiff = () => {
        props.setDifficulty(true)
    }
    return (
        <Modal show = {props.show} keyboard  = {true} >
            <Modal.Header closeButton onClick = {handleClose}>
                <Modal.Title>
                    Movie Search
                </Modal.Title>
            </Modal.Header>

            <Modal.Body onClick = {handleClose}>
                <p>
                    This application is a very bare bones search program <br  />
                Enter a movie name into the input and click enter on the desired movie <br/>
                The movie infomation will then be shown on the right side <br/>
                </p>
                
            </Modal.Body>

            <Modal.Body>

                <Button variant = "primary" className="btn margin-right" onClick = {setDiff}>
                    Click Me
                </Button>
                <p>
                    {}
                </p>
                <p className = {props.diff? "hint-y":"hint-n"}>
                    Made by Jason
                </p>

                
            </Modal.Body>

            

        </Modal>
    )
}

export default AboutModal;
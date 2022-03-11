import React from "react"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'

const Result = (props) => {
    //let cow = "cow";


    return (
        <Container fluid = "md" xs = {2} lg={6}>
            <Row>
                <Col>{props.answer.title}</Col>
            </Row>
            <Row>
                <Col>Genre</Col>
                <Col>Actors</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        //<h1>cow</h1>


        


    )
}

export default Result
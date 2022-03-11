import React from "react"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'


const Result = (props) => {
    //let cow = "cow";


    return (
        <Container fluid = "md" xs = {2} lg={6}>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Runtime </th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td >{props.answer.genre}</td>
                        <td>{props.answer.director}</td>
                        <td>{props.answer.runtime}</td>
                        <td>{props.answer.year}</td>

                    </tr>
                </tbody>
            </Table>
            
        </Container>
        //<h1>cow</h1>


        


    )
}

export default Result
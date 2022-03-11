import React from "react"

import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"

import Table from 'react-bootstrap/Table'
;


const Result = (props) => {
    //let cow = "cow";


    return (
        <Container fluid = "md" xs = {2} lg={6}>

            <Table>
                <thead>
                    <tr className ="table-info">
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Runtime </th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.answer.title}</td>
                            <td >{props.answer.genres?.map((item) => {
                                return (
                                    item + ", "
                                );
                            })}</td>
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
import React from "react"

import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"

import {useState,useEffect} from "react"
import DataTable from 'react-data-table-component';

 


const Result = (props) => {
    //let cow = "cow";
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        setSelectedRows(selectedRows)
        console.log(selectedRows)
    })
    const columns = [
        {
            id: 1,
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Genre",
            selector: (row) => row.genres.replace('"' ,""),
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Runtime (m)",
            selector: (row) => row.runtime,
            sortable: true,
            right: true,
            reorder: true
        },
        {
            id: 4,
            name: "Rating",
            selector: (row) => row.rating,
            sortable: true,
            right: true,
            reorder: true
        }
        ];
    return (
        <div> 
        <Container fluid = "md" xs = {2} lg={6}>
            <DataTable 
                title="Movies watch List"
                highlightOnHover
                // selectableRows
                columns = {columns}
                data = {props.answer}/>

            {/* <button onClick = {() => {
                props.giveAnswer(selectedRows);
            }}>Remove</button>  */}
            <button onClick = {() => {
                props.giveAnswer([]);
            }}>Remove All</button> 
                   
        </Container>
                    
        </div>
        //<h1>cow</h1>


        


    )
}

export default Result
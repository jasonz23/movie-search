import React from "react"
import Movies from "./1001-moviess.json"
import "./App.css"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from "react-bootstrap";




const INPUT_TIMEOUT = 150;
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            predictions: [],

        };
        this.onChange = this.onChange.bind(this);
        //console.log(props.answer)
    }

    getPredictions(value) {
      return Movies.filter(item => item.Title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    onChange(e) {
      // clear timeout when input changes value
      clearTimeout(this.timeout);
      const value = e.target.value;
      this.setState({
        value
      });
    
      if (value.length > 1 ) {
        // make delayed api call
        this.timeout = setTimeout(() => {
          const predictions = this.getPredictions(value);
          this.setState({
            predictions
          });
        }, INPUT_TIMEOUT);
      } else {
        this.setState({
          predictions: []
        });
      }
    }


    render() {
      var newArr = this.props.answer;

        return (
          
          <Container>
            <Row>
              
            <InputGroup  value={this.state.value} onChange = {this.onChange}>
              <FormControl
                placeholder="Movie"
                aria-label="Movie"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <div className="group">          
            {
              this.state.predictions.slice(0,5).map((item, index) => (
                <Row key={item.Position + index} >
                  <div className='input-group' >
                    
                  <Col   className = "options" onClick = {() => {
                    this.props.giveAnswer(newArr.concat({
                        id: item.Position,
                        title: item.Title,
                        rating: item.IMDbRating,
                        year: item.Year,
                        runtime: item.Runtime,
                        genres: item.Genres,

                    }));
                  }}>{item.Title}</Col> 
                    </div>
                </Row>
                ))
            }
            </div>           
            </Row>
          </Container>
     
        )
    }


}

export default Input 
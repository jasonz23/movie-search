import React from "react"
import Movies from "./movies.json"
const INPUT_TIMEOUT = 250;
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            predictions: [],
        };
        this.onChange = this.onChange.bind(this);
    }

    getPredictions(value) {

        return Movies.movies.map((item) => {
            return (
                item.title
            )
        }).filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    onChange(e) {
      // clear timeout when input changes value
      clearTimeout(this.timeout);
      const value = e.target.value;
      this.setState({
        value
      });
    
      if (value.length > 0 ) {
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
        return ( 
          <div >
          <input type = "text" value={this.state.value} onChange = {this.onChange}/>
            <div> 
            {
              this.state.predictions.map((item, index) => (
                <div key={index + item}>{item}</div>
              ))
            } 
            </div> 
          </div>
        )
    }
    
    render2() {
        return (
            <div>
                <input type = "text" value = {this.state.value} onChange = {this.onChange} />

                <div>
            {
                this.state.predictions.map((item,index) => (
                    <div key = {index + item}>
                        {item}
                        </div>
                ))
            }
                </div>
            </div>

        )
    }

}

export default Input
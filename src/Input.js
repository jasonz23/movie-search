import React from "react"
import Movies from "./movies.json"
import "./App.css"

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

        return Movies.movies.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
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
        return ( 
          <div>
          <input type = "text" value={this.state.value} onChange = {this.onChange} className = "input"/>
            <div> 
            {
              this.state.predictions.slice(0,5).map((item, index) => (
                <div key={index + item} className = "options">{item.title}
                <button className = "inputButton" onClick = {() => {
                    this.props.giveAnswer({
                        id: item.id,
                        title: item.title,
                        year: item.year,
                        runtime: item.runtime,
                        genres: item.genres,
                        director: item.director,
                        actors: item.director,
                        plot: item.plot,
                        posterUrl: item.posterUrl

                    });

                }}>Enter</button></div> 
                
              ))
            }
            
            </div> 
            
          </div>
        )
    }


}

export default Input 
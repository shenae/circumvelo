import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);

    this.state = {
        city: '',
        returnedData: ''
        }
        this.handleTextInput = this.handleTextInput.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleTextInput(event) {
        this.setState ({
            city: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        fetch('https://api.citybik.es/v2/networks?fields=company,name,location/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                returnedData: data
            })
        })
    }
    renderCity() {
        const { returnedData } = this.state 
        console.log("this is returnedData: " + this.state);
            return (
                <div>
                    <h1>{returnedData.name}</h1>
                    <h3>{returnedData.company}</h3>
                    <h3>{returnedData.city}</h3>
                    <h3>{returnedData.country}</h3>
                </div>  
            )
        
    }
    
  render() {
    
    return (
      <div>
          <form onSubmit={this.handleFormSubmit}>
              <label>
                  Enter City
              <input type="text" name="" onChange={this.handleTextInput} />
              </label>
              <input type="submit" value="Submit" />
          </form>
          <h2>Bike Sharing Locations</h2>
          {this.renderCity()} 
      </div>
    );
    
  }
}

export default SearchForm;
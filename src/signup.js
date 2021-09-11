


import React from "react";
import arr from './data_f.js';




export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { first_name: "",
        last_name:"",
        email:'',
        gender:'',
        password:'',
    };
    }
  
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);
  
      fetch('./data_file.json', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
  
      event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h1>SIGN UP</h1>
          <label>
            First Name:
            <input type="text" value={this.state.value} name="first_name" onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            Last Name:
            <input type="text" value={this.state.value} name="last_name" onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            Email:
            <input type="email" value={this.state.value} name="email" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
           Gender:
            <input type="text" value={this.state.value} name="Gender" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
          </label>
          <br/>




          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
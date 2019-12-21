import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { postUser} from './services/api-helper'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {
        name: '',
        picture: ''
      }
    }
  }

  handleChange = ev => {
    const { name, value } = ev.target;
 
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
    
  }

  
  handleSubmit = async () => {
    const data = await postUser(this.state.formData)
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <form 
          onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}>
          <input id="name" type="text" name="name" placeholder="Name..." onChange={this.handleChange}/>
            <input id="file" type="file" name="picture" onChange={this.handleChange}/>
            <input type="submit" id="button" name="" value="Submit"/>
        </form>
      </div>
    );
  }
  
}

export default App;

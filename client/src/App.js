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
      },
      picture: null
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

  onChange= (e) => {
    this.setState({
      picture: e.target.files[0]
    })
  }

  
  handleSubmit = async () => {
    // console.log(e)
    // const data = await postUser(this.state.formData)
    // console.log(data)
    this.fileUpload(this.state.picture).then((response)=>{
      console.log(response.data);
    })
  }

  fileUpload = picture => {
    // const url = 'http://localhost:3000/users';
    const formData = new FormData();
    formData.append('name',this.state.formData.name)
    formData.append('picture',picture)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  postUser(formData,config)
  }

  render() {
    return (
      <div className="App">
        <form 
          onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e);
        }}>
          <input id="name" type="text" name="name" placeholder="Name..." onChange={this.handleChange}/>
            <input id="file" type="file" name="picture" onChange={this.onChange}/>
            <input type="submit" id="button" name="" value="Submit"/>
        </form>
      </div>
    );
  }
  
}

export default App;

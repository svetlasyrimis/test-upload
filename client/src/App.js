import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { postUser, getUsers} from './services/api-helper'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {
        name: '',
      },
      picture: null,
      users: []
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

  async componentDidMount() {
    const users = await getUsers()
    this.setState({
      users
    })
  }
  handleSubmit = async () => {
    const resp = await this.fileUpload(this.state.picture)
    const user = resp.data
    debugger;
    this.setState(prevState => ({
      users: [...prevState.users,user]
    }))
    this.setState({
      formData: {
        name: '',
      },
      picture: null,
    })
  }

  fileUpload = picture => {
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
          <input id="name" value={this.state.formData.name} type="text" name="name" placeholder="Name..." onChange={this.handleChange}/>
          <input id="file" key={this.state.picture} type="file"  name="picture" onChange={this.onChange}/>
            <input type="submit" id="button" name="" value="Submit"/>
        </form>

        {this.state.users && this.state.users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <img className="pic" src={user.picture} alt="user-pic"/>
          </div>
        ))}
      </div>
    );
  }
  
}

export default App;

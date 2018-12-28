import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import User from './username.json'



class Home extends Component {
  render() {
    return (
        <div className="content">
          <h1>My Peeps</h1>
          <div>
            {User.map(user => (
              <Link to={`/contact/${user.id}`}><div id="Name"><img src={user.picture.thumbnail}/> <div id="name">{user.name.first} {user.name.last}</div></div></Link>
            ))}
          </div>
        </div>
    );
  }
}

export default Home;

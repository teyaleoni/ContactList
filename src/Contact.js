import React, { Component } from 'react';
import './Contact.css';
import User from './username.json'
import 'font-awesome/css/font-awesome.css'







class Contact extends Component {
    state = {
        img: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        location: ''
    }
    componentDidMount() {
        const use = User.find(us => {
            return us.id == this.props.match.params.id
        })
        this.setState({
            img: use.picture.large,
            fname: use.name.first,
            lname: use.name.last,
            email: use.email,
            phone: use.phone,
            location: use.location.city,
        }) 
    }


myFunction = () => {
    this.props.history.goBack()
} 
    render() {
      return (
        <div className="Content">
        <button onClick={this.myFunction}><i className="fa fa-long-arrow-left"></i></button>
        <img src={this.state.img} id="con"/>
       <div className="image"></div>
            
           <ul className="info">
               <li><i className="fa fa-user"></i><span>{this.state.fname} {this.state.lname}</span></li>
               <li><i className="fa fa-envelope"></i><span><div id='email'>{this.state.email}</div></span></li>
               <li><i className="fa fa-mobile" ></i><span>{this.state.phone}</span></li>
               <li><i className="fa fa-globe" ></i><span>{this.state.location}</span></li>
           </ul>
       </div>
      )
    }
}



export default Contact
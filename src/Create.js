import React, {Component} from "react";
import axios from 'axios';
import './Create.css'
import {Navigate} from 'react-router-dom'

class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            id:'',
            name: '',
            regno:'',
            bookname: '',
            duedate:'',
            submitted: false
         };
        }

 handleaccidchange = (event) => {
     this.setState({id:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({name: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({regno: event.target.value});
     };


    handlebranchchange = (event) => {
        this.setState({bookname: event.target.value});
    };


    handlemobilechange = (event) => {
        this.setState({duedate: event.target.value});
    };


 



    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id : this.state.id,
            name: this.state.name,
            regno: this.state.regno,
            bookname: this.state.bookname,
            duedate: this.state.duedate,
            submitted: true
         
        };
this.setState({submitted: true});
        axios.post('http://localhost:8080/add', data)
    };


    render(){
        return(
    <div className="whole">
        <h1><center><u>LIBRARY MANAGEMENT</u></center></h1>
        {this.state.submitted && <Navigate to="/Table"/>}
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">id</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Enter Your ID"
                    value={this.state.id}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">Name</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Your Name"
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">regno</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Enter Your regno"
                    value={this.state.regno}
                    onChange={this.handlebanknamechange}
                />
                <label className="login-label">bookname</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Enter Your bookname"
                    value={this.state.bookname}
                    onChange={this.handlebranchchange}
                />
                <label className="login-label">duedate</label>
                <input 
                    className="login-input"
                    type="number"
                    placeholder="Enter Your duedate"
                    value={this.state.duedate}
                    onChange={this.handlemobilechange}
                />
               
                
                <button className="login-button" type="submit">Add</button>
            </form>
        </div>
        )
    }
}



export default Create;
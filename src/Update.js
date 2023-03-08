import React, {Component} from "react";
import axios from 'axios';
import './Create.css'
import {Navigate} from 'react-router-dom';
import { useParams } from "react-router-dom";


class Update extends Component {
    state = {
        data: [],
        update: false
    }
    
    // componentDidMount() {
    //     const {match} = this.props;
    //     const id = match.params.id;
    //     axios.get(`http://127.0.0.1:8080/get/${id}`).then(response =>{this.setState({data: response.data});
    //     console.log(this.props.params.id);
    // })
    // .catch(error => {console.log(error);
    // });
    // }
    
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
        axios.put(`http://127.0.0.1:8080/update/${this.state.id}`, data)
        console.log(data);
    };
    render(){
        // console.log(this.props.id);
        return(
            <>
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
            </>
        )
    }
}

export default Update;
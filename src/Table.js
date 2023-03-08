import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Table extends Component {
    state = {
        data: [],
        update: false
    }


    componentDidMount() {
    axios.get('http://localhost:8080/get').then(response =>{this.setState({data: response.data});
})
.catch(error => {console.log(error);
});
}

deleteData(id, e){
    axios.delete(`http://localhost:8080/del/${id}`).then(response => {console.log(response);
    
    const data = this.state.data.filter(item => item.id !== id);
    this.setState({ data });
})
}

// updateData(id, e){
//     //axios.put(`http://localhost:8080/update"/${id}`).then(response => {console.log(response);
//     axios.get('http://localhost:8080/get').then(response =>{this.setState({data: response.data});
    
// })
// .catch(error => {console.log(error);}
// )
// }   

handleSubmit = (event) => {
    this.setState({update:true});
}


    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>regno</th>
                        <th>bookname</th>
                        <th>duedate</th>
                                                
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.name}</td>
                            <td>{ticket.regno}</td>
                            <td>{ticket.bookname}</td>
                            <td>{ticket.duedate}</td>
                           
                            
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.deleteData(ticket.id, e)}>Delete</button>
                            </td>
                            <td>
                            <button className='btn btn-danger' onClick={this.handleSubmit}> {this.state.update && <Navigate to={'/Update/'+`${ticket.id}`}/>} Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table;
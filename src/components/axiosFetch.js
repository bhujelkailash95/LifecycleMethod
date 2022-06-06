import React from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'

class AxiosFetch extends React.Component{
    state = {
        todos: [],
    };
    componentDidMount() {
        axios 
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            console.log(response)
            let data = response && response.data;
            this.setState({
                todos: data,
            });
        })
        .catch (function (error) {
            console.log(error);
        });
    }
    render(){
        console.log(this.state.todos.id);
        let displayData = this.state.todos.map((todo) =>{
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td id="title">{todo.title}</td>
                    <td className={
                        todo.completed === true ? "task-complete" : "task-incomplete"
                    }> 
                    {todo.completed === true ? <p>Completed</p> : <p>Incomplete</p>}
                    </td>
                </tr>
            );
        });
        return(
            <div className="App" id="margin">
            <Table stripped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Complete Status</th>
                    </tr>
                </thead>
                <tbody>{displayData}</tbody>
            </Table>
            </div>
        );
    }
}

export default AxiosFetch
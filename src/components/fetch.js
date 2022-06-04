import React from "react";

class Fetch extends React.Component{
    state = {
        fetch:[]
    }
    componentDidMount(){
        console.log('Component did mount')
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                fetch:data
            })
        })
    }
    render(){
return(
    <>
    Todo
    </>
)
    }
}

export default Fetch;
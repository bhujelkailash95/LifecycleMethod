import React, { Component } from "react";

class DidUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "pink"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "green"})
        }, 1000)
    }
    componentDidUpdate(){
        document.getElementById("mydiv").innerHTML = "The updated favorite color is"
        + this.state.favoritecolor;
    }
    render(){
        return(
            <>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <div id="mydiv"></div>
            </>
        );
    }
}

export default DidUpdate;
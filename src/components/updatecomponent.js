import React from 'react'

class UpdateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor:"black"};
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({favoritecolor: "white"});
    }
    render(){
        return(
            <>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <button type='button' onClick={this.changeColor}>Change color</button>
            </>
        );
    }
}

export default UpdateComponent;
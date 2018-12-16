import React, {Component} from 'react';

class AddPlayerForm extends Component {
    // state = {
    //     value : ''
    // };
    
    // handleValueChange= (e) => {
    //     this.setState({ value: e.target.value});
    // }
    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        // this.setState({value:''});
        e.currentTarget.reset();
    }
    
    render(){
        console.log(this.playerInput);
        // console.log(this.state.value);
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type= "text"
                    ref= {this.playerInput}
                    placeholder= "Enter a player's name"
                   
                />
                <input 
                    type= "submit"
                    value= "Add player"
                />
            </form>
        );
    }

}

export default AddPlayerForm;
import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            age:'',
            height:''
        }
    }

    addNewSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({

            name:'',
            age: '',
            height: ''
        
        })
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }


render() {
    return (

        <div>
            <form autoComplete='off' onSubmit={this.addNewSmurf} >

            <input
                name='name'
                type='text'
                value={this.state.name}
                placeholder='Name'
                onChange={this.handleChanges}
            />

            <input
                name='age'
                type='text'
                value={this.state.age}
                placeholder='Age'
                onChange={this.handleChanges}
            />

            <input
                name='height'
                type='text'
                value={this.state.height}
                placeholder='Height'
                onChange={this.handleChanges}
            />
        
        <button type='submit'> Add a Smurf </button>

            </form>


        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        addSmurfs: state.addSmurf
    }
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm)
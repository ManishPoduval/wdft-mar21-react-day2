import React, {Component} from 'react'


class Button extends Component {
    

    // 'state' is a keyword
    // State is an object in React Class
    // Stores all variables that might get updated in a components

    state = {
        count: 1
    }



    // Creating ES6 functions , to avoid dealing with 'this' complexities
    handleClick = (e) => {
        //console.log(e)
        // gives info on which element triggered the event
        //console.log( e.target   )

        //console.log('Click works')


        // setState is a function in the Component Class in React
        // setState(stateObj, callback)
        // invokes the render() after the state has been updated
       
        // its an asynchronous method
        this.setState({ 
            count: this.state.count + 1
        }, () => {
            // use the callback when you need to do something after the state has been updated
            // this is an optional parameter
            // will ALWAYS give the updated value of state
            console.log( this.state.count )
        })

        // Will not always give the update value of state
        console.log( this.state.count )
        // Or can do it this way as well
        /*

        let newCount = this.count + 1
        let newState = {
            count: newCount
        }

        this.setState(newState)


        */
    }

    render(){
        console.log('In render')
        // destructuring from the 'this.state' object
        const {count} = this.state

        // inline style attributes are always in camelCase
        let myStyle = {
            backgroundColor: 'blue',
            paddingLeft: '40px'
        }

        return <button style={ myStyle } onClick={ this.handleClick } >{count} Like</button>
        /*
        return <button onClick={ () => {}} >{this.count} Like</button>

        return <button onClick={ function(){}  } >{this.count} Like</button>
        */
    }
}

export default Button

// handle the click/press
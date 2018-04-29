import React, { Component } from 'react';


class Main extends Component {

    state = {
        counter: 1
    }

    componentDidMount() {
        this.setState({
            counter: 9
        })
    }

    handleClick = () => {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
    }


    render() {
        return <div className="main" onClick={this.handleClick}>I am Mai  {this.state.counter} </div>
    }
}

module.exports = Main;
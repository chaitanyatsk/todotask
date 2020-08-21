import React, { Component } from 'react';
import Calender from 'react-calender';

class Todo extends Component {
    constructor(props) {
        super();
        this.state = {
            date: new Date()
        }
       this.onchange = this.onchange.bind(this);
    }
    onchange = (date) => {
        this.setState({ date });
    }

    render() {
        return (
            <div>
                <Calender onChange={this.onchange} value={this.state.date}/>
            </div>
        )
    }
}

export default Todo;
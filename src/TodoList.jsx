import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.props.addItem();
        this.textInput.current.focus();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                        <input
                            placeholder="Task"
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                            ref={this.textInput} 
                        />
                        <input
                            type="button"
                            value="Add task"
                            onClick={this.focusTextInput}
                        />
                </div>
            </div>
        )
    }
}

export default TodoList;
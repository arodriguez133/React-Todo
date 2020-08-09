import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(this.state.todo);
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    render(){
        return(
            <form onSubmit={this.submitTodo}>
                <input 
            name='todo'
            type='text'
            placeholder='Add new task here'
            title='Task'
            onChange={this.handleChanges}
            value={this.state.todo}
            />
            <button>Add ToDo</button>
            </form>
        );
    }
}

export default TodoForm;
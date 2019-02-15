import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.items;
        return (
            <ul>
                {todoList.map((todo) =>
                    <Todo
                        key={todo.toString()}
                        text={todo.text}
                        priority={todo.priority}
                        dueDate={todo.dueDate}
                    />
                )}
            </ul>
        );
    }
}
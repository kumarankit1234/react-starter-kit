import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoList = ({ todoList, addTodo }) => {
    let input;
    return (
        <div>
            <input ref={(ref) => input = ref}
                onBlur={() => {
                    addTodo(input.value);
                    input.value = ''
                }}
            />
            {
                todoList.map(todo =>
                    <li key={todo}>{todo}</li>
                )
            }

        </div>
    )

}

const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (value) => {
        dispatch({
            type: 'ADD_TODO',
            value: value
        })
    }
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

module.exports = TodoListContainer;
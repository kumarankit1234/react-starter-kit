import initialState from './initial-state';
const todos = (state = initialState.todoList, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.value]
        default:
            return state;

    }
}

export default todos;
//  import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from './actions';
//  import {todos} from './constants';

// const Reducer = (state = todos, action) => {
//     switch (action.type) {
//       case ADD_TODO:
//         return [
//           ...state,
//           {
//             id: action.id,
//             text: action.text,
//             completed: false
//           }
//         ]
//       case TOGGLE_TODO:
//         return state.map(todo =>
//           todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//         )
//         case EDIT_TODO :
//           return [
//             ...state,
//           {
//             id:action.id,
//             // text: action.text
//           }
//         ]
//         case DELETE_TODO:
//           let deleteProduct = state.findIndex(item => item.id === action.id)
//              console.log(deleteProduct)
//              state.splice(deleteProduct, 1);
//              return {
//                      ...state,
//                      state
//              };

//       default:
//         return state
//     }
//   }

//   export default Reducer


const INITIAL_STATE = {
    todos: [
        {
            id: 1,
            text: 'dummy text'
        },
        {
            id: 2,
            text: 'dummy text 2'
        },
        {
            id: 3,
            text: 'dummy text 3'
        }
    ],
    editId: false,
    deleteId: false,
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            let newId = state.todos.length+1
            let newObject = {
                "id" : newId,
                text : action.text
            }
            console.log(newObject)
            let newTodos = [...state.todos]
             newTodos.push(newObject)
             console.log(newTodos)
                return {
                ...state,
                todos: newTodos,
                }
            
            // return [
            //     ...state,
            //     {
            //         id: action.id,
            //         text: action.text,
            //         completed: false
            //     }
            // ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )

        case "EDIT_TODO": {
            console.log(action)
            return {
                ...state,
                editId: action.id

            }
        }
        case "DELETE_TODO": {
            console.log(action)
            let newTodos = [...state.todos]
            let deleteIndex = newTodos.findIndex(todo => todo.id === action.id)
            newTodos.splice(deleteIndex, 1)
            return {
                ...state,
                todos: newTodos

            }
        }
        case "UPDATE_TODO": {
            let newTodos = [...state.todos]
            newTodos.forEach(todo => {
                if (todo.id === state.editId) {
                    todo.text = action.value
                }
            });
            return {
                ...state,
                todos: newTodos
            }
        }
        default:
            return state;
    }
}

export default Reducer

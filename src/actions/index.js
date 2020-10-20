
let nextTodoId = 0
const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })

const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id
});

const editTodo = (id) => ({
    type: "EDIT_TODO",
    id
})

const updateTodoText = (value) => ({
    type: "UPDATE_TODO",
    value
})

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export {
    addTodo,
    setVisibilityFilter,
    deleteTodo,
    editTodo,
    updateTodoText,
    toggleTodo,
    VisibilityFilters
}
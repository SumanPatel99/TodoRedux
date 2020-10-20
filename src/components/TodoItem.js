import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, editTodo, updateTodoText, } from "../actions";
import Toggle from '../components/Toggle'

export class TODOITEM extends Component {
    render() {
        let { addTodo, deleteTodo, editTodo, todos, editId, updateTodoText, toggleTodo, input } = this.props;
        return (
            <div className="row">
                <ul>
                    <h1>kk</h1>
                    {todos && todos.length ? todos.map((todo, id) => {
                        console.log(todo, editId)
                        return editId !== id ?
                            <div>
                                <h4>{todo.text}</h4>
                                <Toggle key={id} {...todo} onClick={() => toggleTodo(id)} />,
                                <p>{todo.text}</p>
                                <button onClick={() => deleteTodo(id)}>Delete</button>
                                <button onClick={() => editTodo(id)}>Edit</button>
                            </div>
                            : <div>
                                <input value={todo.text} onChange={(e) => updateTodoText(e.target.value)} />
                                <button onClick={() => editTodo(false)}>Ok</button>
                            </div>
                        })
                        : null} <br/>

                </ul>

                {/* <input type="text" /> */}
                {/* <button onClick={() => addTodo()}>Add New</button><br/><br/>  */}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    editId: state.editId,
    todos: state.todos,
})

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoText,
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOITEM)


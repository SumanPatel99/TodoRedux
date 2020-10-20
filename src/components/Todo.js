import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../actions'

const TODO = ({ dispatch }) => {
    let input
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input ref={node => (input = node)} />
          {/* <input type="date" value="2018-07-22" /> */}
          <button type="submit" onClick={() => addTodo()}>Add Todo</button>
        </form>
      </div>
    )
  }
  
  export default connect()(TODO)
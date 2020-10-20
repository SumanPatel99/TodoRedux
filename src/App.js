import React from 'react';
import logo from './logo.svg';
import './App.css';
import TODO from './components/Todo'
import TODOLIST from './components/Todolist'
import VisibleTodoList from './components/visibleTodoList'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import Store from './store'
import Todoitem from './components/TodoItem'
import TodoReactApp from './components/todoReactApp'


function App() {
  return (
    <div>
      {/* <TodoReactApp/> */}
      <Provider store={Store}>
      <div className="App m-5">
        <TODO />
        <br/>
        <VisibleTodoList/><br/>
        <TODOLIST />
      </div>
    </Provider>
    </div>
    
  );
}

export default App;

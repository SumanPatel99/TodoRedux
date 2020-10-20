import React,{Component} from 'react';

class todoReact extends Component{
  constructor(props){
    super(props);
      this.state = {
        input: React.createRef(),
        todos :[]
      };
     }

    handleAddTodoItem() {
      var todos = [...this.state.todos,
      {
        name: this.state.input.current.value,
        completed : false
      }];
      this.setState({todos});
      console.log(todos)
    }
    removeItem(index){
      var todos = [...this.state.todos];
      todos.splice(index,1);
      this.setState({todos:[...todos]});
     }
    onToggleTodoList(todo){
      var todos = [...this.state.todos];
      todo.completed = !todo.completed
      this.setState({todos:[...todos]});
    }

    render(){    
     return(
        <div>
          <form>
            <input type="text" onChange={this.onChange} ref={this.state.input}/>
              <button onClick={(e) => {e.preventDefault(); e.stopPropagation(); this.handleAddTodoItem() }}>Add Items</button>
              <ul>
                {this.state.todos.map((todo,index) => {
                      return <li key ={index} onClick={(e) => {e.preventDefault(); e.stopPropagation(); this.onToggleTodoList(todo)}}>
                      {todo.completed? <s>{todo.name}</s> : todo.name}
                      <button onClick={(e) => {e.preventDefault(); e.stopPropagation(); this.removeItem(index)}}>delete</button>
                      </li>
                 })}
                
              </ul>
          </form>
        </div>
      )
    };
}
export default todoReact;

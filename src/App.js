import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      undoneList: [],
      todoList: null
    };
  }


  async clickHandler() {
    
    await this.setState({ undoneList: [...this.state.undoneList, this.state.userInput] });

    this.setState( {todoList: Todo({tasks: this.state.undoneList})} )
  }
    

  
  changeHandler(value) {
    this.setState( {userInput: value} )
  }

  render() {
    return (  
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input placeholder='Enter new task' onChange={ (e) => this.changeHandler(e.target.value) }></input>
          <button onClick={() => this.clickHandler()}>Add</button>
        </div>
        <div>{this.state.todoList}</div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
      {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];

    this.state = { items: todos, text: '', priority: '', dueDate: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
  }

  handleDueDate(e) {
    this.setState({ dueDate: e.target.value });
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate.length){
      return;
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority : '',
      dueDate: ''
    }));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
              <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
              />
              <label htmlFor="new-todo">
                Priority?
              </label>
              <input
                  id="new-priority"
                  type="number"
                  name="quantity"
                  min="1"
                  max="5"
                  onChange={this.handlePriority}
              />
              <label htmlFor="new-todo">
                When?
              </label>
              <input
                  id="new-duedate"
                  type="datetime-local"
                  name="dueDate"
                  onChange={this.handleDueDate}
              />
              <button>
                Add #{this.state.items.length + 1}
              </button>
            </form>
          </header>
        </div>
    );
  }
}

export default App;

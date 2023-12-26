import React, { Component } from 'react';
import './App.css';

import AddUserItem from './AddUserItem';
import UserItem from './UserItem';

const users = [
  {
    name: 'user1',
    age: 22,
    salary: 2000,
  },
  {
    name: 'user2',
    age: 23,
    salary: 4000,
  },
  {
    name: 'user3',
    age: 24,
    salary: 4000,
  },
  {
    name: 'user4',
    age: 25,
    salary: 5000,
  },
  {
    name: 'user6',
    age: 26,
    salary: 6000,
  }
];

localStorage.setItem('users', JSON.stringify(users));

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      users: JSON.parse(localStorage.getItem('users'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount(){
    const users = this.getUsers();
    this.setState({ users })
  }

  getUsers() {
    return this.state.users;
  }

  onAdd(name, age, salary) {
    const users = this.getUsers();
    users.push({
      name,
      age,
      salary
    });

    this.setState({ users })
  }

  onDelete(name){
    const users = this.getUsers();

    const filteredUsers = users.filter(user => {
      return user.name !== name;
    });

    this.setState({ users: filteredUsers })
  }

  onEditSubmit(name, age, salary, newName){
    let users = this.getUsers();

    users = users.map(user => {
      if(user.name === newName){
        user.name = name;
        user.age = age;
        user.salary = salary;
      }

      return user;

    });

    this.setState({ users })
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <AddUserItem onAdd={this.onAdd} />
  
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <UserItem
                key={user.name}
                {...user}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class AddUserItem extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.ageInput.value, this.salaryInput.value);
    this.nameInput.value = '';
    this.ageInput.value = '';
    this.salaryInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3> Add User </h3>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
        <input placeholder="Age" ref={ageInput => this.ageInput = ageInput} />
        <input placeholder="Salary" ref={salaryInput => this.salaryInput = salaryInput} />
        <button>Add</button>

        <hr />
      </form>
  );
 }
}

export default AddUserItem;

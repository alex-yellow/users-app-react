import React, { Component } from 'react';

class UserItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        const { onDelete, name } = this.props;
        onDelete(name)
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onEditSubmit(event) {
        event.preventDefault();
        console.log('Submitting edit form'); // Добавьте эту строку
        this.props.onEditSubmit(
            this.nameInput.value,
            this.ageInput.value,
            this.salaryInput.value,
            this.props.name
        );

        this.setState({ isEdit: false });
    }

    render() {
        const { name, age, salary } = this.props;
      
        return (
          <>
            {this.state.isEdit ? (
              <div>
                <form onSubmit={this.onEditSubmit}>
                  <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                  <input placeholder="Age" ref={ageInput => this.ageInput = ageInput} defaultValue={age} />
                  <input placeholder="Salary" ref={salaryInput => this.salaryInput = salaryInput} defaultValue={salary} />
                  <button>Save</button>
                </form>
              </div>
            ) : (
              <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td><button onClick={this.onEdit}>Edit</button></td>
                <td><button onClick={this.onDelete}>Delete</button></td>
              </tr>
            )}
          </>
        );
      }
}

export default UserItem;

import React, { Component } from 'react'

class BookForm extends Component {


  initialState = {
    searchValue: '',
  }

  state = this.initialState


  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    })

  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { searchValue } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchValue}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default BookForm;
import React, { Componenet } from 'react';
import Table from './components/Table';
import Form from './components/Form';


class App extends React.Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }


  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <React.StrictMode>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </React.StrictMode>
      </div>
    )
  }
}

export default App
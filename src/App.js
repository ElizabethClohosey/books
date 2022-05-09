import React, { Componenet } from 'react';
import Table from './components/Table';
import Form from './components/Form';

import BookForm from "./components/book-components/bookForm";
import Results from "./Api";


class App extends React.Component {
  state = {
    searchValue: ''
  }
  // state = {
  //   characters: []
  // }

  // removeCharacter = (index) => {
  //   const { characters } = this.state
  //   this.setState({
  //     characters: characters.filter((character, i) => {
  //       return i !== index;
  //     })
  //   })
  // }

  // handleSubmit = (character) => {
  //   this.setState({ characters: [...this.state.characters, character] })
  // }
  handleSubmit = (searchValue) => {
    this.setState(searchValue);
  }


  render() {
    const { searchValue } = this.state
    return (
      <div className="container">
        <React.StrictMode>
          <section>
            <BookForm handleSubmit={this.handleSubmit} />
          </section>
          <section style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {this.state.searchValue ? (
              <Results searchValue={searchValue} />
            ) : (
              <h1>Use the search bar to search for a book, author or genre</h1>
            )}
          </section>
        </React.StrictMode>
        {/* <React.StrictMode>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </React.StrictMode> */}
      </div>
    )
  }
}

export default App
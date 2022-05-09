import React, { Component } from 'react'
import defaultImage from './images/default-image.png';

class Results extends Component {
  state = {
    // data: {},
    items: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log("Component did update")
    let searchValue = this.props.searchValue;
    const key = process.env.REACT_APP_BOOKS_API_KEY;

    const url =
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=`

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          // data: result,
          items: result.items,
        })
      })
  }


  render() {
    const { data, items } = this.state

    return (
      items.map((item, index) => (
        <div key={index} className="results-card" >
          <div className="card-image" style={{ minHeight: "40%", textAlign: 'center' }}>

            {!item.volumeInfo.imageLinks ? (
              <img src={defaultImage}></img>
            ) : (
              <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="#" style={{ height: '150px', width: '100px' }} ></img>
            )}
          </div>

          <div className="card-body">
            <p ><strong>{item.volumeInfo.title}</strong> </p>
            <p><strong>Author: </strong>{item.volumeInfo.authors}</p>
            {/* <a>Description</a> */}

            <p><strong>Description:</strong>{item.volumeInfo.description}</p>
          </div>
          {/* 
          <div className="card-footer">
            <button>+</button>
            <button>More</button>
            <button>-</button>
          </div> */}
        </div >
      ))
    )
  }
}

export default Results
import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div>
        <h2>Number of Books - </h2>
        <div>
          <button>Add Book</button>
          <button>Buy Book</button>
        </div>
      </div>
    )
  }
}

export default  Book;
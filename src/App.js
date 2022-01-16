import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route } from "react-router-dom";
import Search from './components/search'
import Shelves2 from './components/shelves2'



class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
this.getAllBooks()


  }
  getAllBooks(){
    BooksAPI.getAll().then(res=>{
      this.setState({books:res})
    
    })
  }
  updateBookPlace = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(res => ({     
        books:res.books.filter(thisbook => {
          if (thisbook.id === book.id) {
         
            return (thisbook.shelf = shelf)
          } 
          else {
            return thisbook;
          }
        })
      }))
    })
  }
  render() {
   
    return (
      <div className="app">
        
        {/* the main page */}
        <Route exact path="/" render={()=>(
          <Shelves2
          books={this.state.books}
        changeShelf={this.updateBookPlace}
          />
        )}/>
       {/* the search page */}
<Route path="/search" render={()=>(
          <Search changeShelf={this.updateBookPlace}
          books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

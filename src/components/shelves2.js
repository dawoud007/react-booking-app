import React from 'react'
import Add from './addnew'
import Book from './shelfbook'
const Shelves=(props)=>{
   
      const {books}=props
     

        return(
                
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            {books.filter(books=>books.shelf=== "currentlyReading")
                            .map(book=>{
                            return(
                            <li key={book.id}><Book
                            thisbook={book}
                            changeShelf={props.changeShelf}
                            currentShelf="currentlyReading"
                            />
                            </li>)})
                            }
                            
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                          {books.filter(books=>books.shelf==="wantToRead")
                            .map(book=>{
                            return(
                            <li key={book.id}><Book
                            thisbook={book}
                            changeShelf={props.changeShelf}
                            currentShelf="wantToRead"
                            /></li>)})
                            }
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                          {books.filter(books=>books.shelf=== "read")
                            .map(book=>{
                            return(
                            <li key={book.id}><Book
                            thisbook={book}
                            changeShelf={props.changeShelf}
                            currentShelf="read"
                            /></li>)})
                            }
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                 {/*  move to search page */}
                 <Add/>
                </div>
         
        )
    
}
export default Shelves
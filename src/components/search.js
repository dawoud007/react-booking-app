import React ,{Component} from 'react'
import Sbook from './Srearchedbook'
import {Link } from "react-router-dom";
import* as BooksAPI from '../BooksAPI'


class Search extends Component{
  state={
    query:'',
    searchedBooks:[]
  }
  changeTheQuery=(query)=>{
    this.setState({query:query})
    console.log(query)
   this.findBook(query)
    
  }
  findBook=(query)=>{
    if(query){
      BooksAPI.search(query).then((res)=>{
        if(res.error){
          this.setState({searchedBooks:[]})
        }else
        this.setState({searchedBooks:res})})
    
    }else{
      this.setState({searchedBooks:[]})
    }
  
  }
    render(){
  const newbooks= this.state.searchedBooks.map(item=>{
  let theNewshelf='none'
  this.props.books.map((book)=>(
    book.id===item.id? theNewshelf=book.shelf:""
  ))

    return(
      <li key={item.id}>
      <Sbook
      changeShelf={this.props.changeShelf}
      sbook={item}
      currentShelf={theNewshelf}/>
      
      </li>
    )
  })
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
              
                <input type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e)=>this.changeTheQuery(e.target.value)}
                
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {newbooks}
              </ol>
            </div>
          </div>
        )
    }
}
export default Search
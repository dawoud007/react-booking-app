import React ,{Component} from 'react'
class Sbook extends Component{
    render(){
        let display=this.props.sbook.imageLinks?this.props.sbook.imageLinks.thumbnail:'';
        const book=this.props.sbook
        
        
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${display})` }
            
            }></div>
              <div className="book-shelf-changer">
                <select value={this.props.currentShelf} onChange={(e)=>{this.props.changeShelf(book,e.target.value)}}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
          </div>
        )
    }
}
export default Sbook
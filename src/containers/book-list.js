import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//container : direct connection to state managed by redux
//smart component and dumb component
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key = {book.title}
          onClick = {() => this.props.selectBook(book)}
          className = "list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever returned here acts as props inside BookList
  return {
    books : state.books
  };

}

function mapDispatchToProps(dispatch) {
  //Anything returned from this function will br props for the BookList container
   return bindActionCreators({ selectBook: selectBook}, dispatch);
   //whenever selectBook is called, the result should be passed to all of our reducers
}
//Promote BookList from a component to a container - it needs to knowabout this new dispatch method , selectBook.
//Make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

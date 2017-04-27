import React, { Component } from 'react'

class SearchBar extends Component {

constructor(props){
  super(props);
  this.state = {term: ''}; //只有在constructor 可以用this.state賦值
}
//其他地方都要用this.setState  賦值
 //JSX取變數用大括號{}
  render (){
      return(
      <div className="search-bar">
      <input
       value = {this.state.term}
       onChange={event => this.onInputChange(event.target.value)} />

    </div>)
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar

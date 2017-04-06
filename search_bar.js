import React, { Component } from 'react'

class SerchBar extends Component {

constructor(props){
  super(props);
  this.state = {term: ''}; //只有在constructor 可以用this.state賦值
}
//其他地方都要用this.setState  賦值
 //JSX取變數用大括號{}
  render (){
      return(
      <div>
      <input
       value = {this.state.term}
       onChange={(event) =>this.setState({term: event.target.value})} />

    </div>)
  }


}

export default SerchBar

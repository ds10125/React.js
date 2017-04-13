import React, {Component} from 'react';
import ReactDOM from 'react-dom'; //引用函式庫不需指定路徑
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'; //自己寫的js要指定路徑
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyB7CB8xxY99yGbD83Pga9bpWyQC0BrZJS4';
// Create a new Component to produce HTML using JSX


class App extends Component   {
  constructor(props){
    super(props);
    this.state = { video:[]};
    //function(data) = (data) =>
    YTSearch({key:API_KEY , term:'Banshee'}, (video) =>{
      this.setState({video}); // state變數名稱跟值依樣, video:video可簡化為 video
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoList videos = {this.state.video} />
    </div>
    );
 }
}
// Take the Component to HTML
ReactDOM.render(<App />,document.querySelector('.container'));

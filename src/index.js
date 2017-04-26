import React, {Component} from 'react';
import ReactDOM from 'react-dom'; //引用函式庫不需指定路徑
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'; //自己寫的js要指定路徑
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBgx_X3l6St2nmJFNhqS6aftJBqfYvVgwc';
// Create a new Component to produce HTML using JSX


class App extends Component   {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    };
    //function(data) = (data) =>
    YTSearch({key:API_KEY , term:'CPU'}, (videos) =>{
      this.setState({
          videos:videos,
          selectedVideo:videos[0]
      }); // state變數名稱跟值依樣, video:video可簡化為 video
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos = {this.state.videos} />
    </div>
    );
 }
}
// Take the Component to HTML
ReactDOM.render(<App />,document.querySelector('.container'));

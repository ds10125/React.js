import React from 'react';
import ReactDOM from 'react-dom'; //引用函式庫不需指定路徑

import SearchBar from './components/search_bar'; //自己寫的js要指定路徑

const API_KEY = 'AIzaSyB7CB8xxY99yGbD83Pga9bpWyQC0BrZJS4';
// Create a new Component to produce HTML using JSX

const App =  () => {
  return (
    <div><SearchBar /> </div>
  );
}
// Take the Component to HTML
ReactDOM.render(<App />,document.querySelector('.container'));

import React, { Component } from 'react';
import Posts from './components/posts/posts';

class App extends Component {
  state = { 
    posts:[
      {id:1,title:'Article Title 01',likes:12,body:'You can add webfonts, meta tags, or analytics to this file The build step will place the bundled scripts'},
      {id:2,title:'Article Title 02',likes:22,body:'You can add webfonts, meta tags, or analytics to this file The build step will place the bundled scripts'},
      {id:3,title:'Article Title 03',likes:32,body:'You can add webfonts, meta tags, or analytics to this file The build step will place the bundled scripts'},
      {id:4,title:'Article Title 04',likes:42,body:'You can add webfonts, meta tags, or analytics to this file The build step will place the bundled scripts'},
    ]
   }
  render() { 
    return ( 
      <div className="container">
        <Posts posts={this.state.posts}/>
      </div>
     );
  }
}
 

export default App;

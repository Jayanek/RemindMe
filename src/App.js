import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/pages/about';
import Navbar from './components/partials/navbar';
import AddPost from './components/posts/addPost';
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

   addPost = (title,likes,body) => {
     const newPost = {id:5,title,likes,body}
     const posts = [newPost,...this.state.posts]
     this.setState({posts})

   }

  render() { 
    return ( 

      <React.Fragment>
        <Router>
        <Navbar/>

        <Route path='/' exact>
          <div className="container">
            <Posts posts={this.state.posts}/>
          </div>
        </Route>

        <Route path='/about' exact>
          <About/>
        </Route>

        <Route path='/create' exact>
          <AddPost addPost={this.addPost}/>
        </Route>
        
        </Router>
      </React.Fragment>
      
     );
  }
}
 

export default App;

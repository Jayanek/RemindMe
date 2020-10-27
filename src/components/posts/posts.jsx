import React, { Component } from 'react';
import Post from './post'
import propTypes from 'prop-types';

class Posts extends Component {

    render() { 

        return ( 
            <div className="row row-cols-1 row-cols-md-3">
               
                    {this.props.posts.map(post => {
                        return (
                            <div className="col mb-4">
                                <Post key={post.id} post={post}/>
                            </div>
                        )
                    })}
                
            </div>
         );
    }
}

Post.propTypes = {
    posts:propTypes.array.isRequired
}
 
export default Posts;
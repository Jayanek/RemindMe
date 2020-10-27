import React, { Component } from 'react';
import propTypes from 'prop-types';

class Post extends Component {

    render() { 

        const {id,title,likes,body} = this.props.post

        return ( 
            <div className="card">
                    
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body.slice(0,40)}....</p>
                </div>
            
            </div>
         );
    }
}

Post.propTypes = {
    post:propTypes.object.isRequired
}
 
export default Post;
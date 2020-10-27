import React, { Component } from 'react';
import propTypes from 'prop-types';

class Post extends Component {

    render() { 

        const {id,title,likes,body} = this.props.post

        return ( 
            <div className="card">
                    
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <img src="https://images.freeimages.com/images/large-previews/a61/vikingland-1316664.jpg" className="card-img-top" alt="featured"/>
                    <span class="badge badge-pill badge-info">{likes} likes</span>
                    <p className="card-text">{body.slice(0,80)}</p>
                    <a href="#" class="badge badge-warning">Read more</a>
                </div>
            
            </div>
         );
    }
}

Post.propTypes = {
    post:propTypes.object.isRequired
}
 
export default Post;
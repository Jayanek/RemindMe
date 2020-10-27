import React, { Component } from 'react';

class AddPost extends Component {
    state = { 
        title:'',
        likes:'',
        body:''
     }


     onSubmit = (e) => {
         e.preventDefault()
         this.props.addPost(this.state.title,this.state.likes,this.state.body)
         this.state.title=''
         this.state.likes=''
         this.state.body=''
         this.setState({ redirect: "/" });
        
         
     }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-2">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" >Title</label>
                        <input type="text" onChange={(e)=>this.setState({title:e.target.value})} id="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="likes">Likes</label>
                        <input type="text" onChange={(e) => this.setState({likes:e.target.value})} className="form-control" id="likes"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Post</label>
                        <textarea className="form-control" onChange={(e) => this.setState({body:e.target.value})} id="body" rows="6"></textarea>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AddPost;
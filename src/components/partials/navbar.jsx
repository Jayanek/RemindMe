import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-light mb-4" style={{backgroundColor:'#5bc0de'}}>
            <Link to="/" className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/create'>Create New</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;
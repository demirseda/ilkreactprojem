import React from 'react';
import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Navbar(props){
    const {title}= props;
    return(
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3">
            <a href="/" className="navbar-brand">{title}</a>
            <ul className="navbar nav ml-auto">
                <li className="nav-item active"><Link to="/" className="nav-link ml-2" style={{color:"white"}}>Home</Link> </li>
                <li className="nav-item "><Link to="/Add" className="nav-link ml-2" style={{color:"white"}}>User Add</Link></li>
                <li className="nav-item "><Link to="/github"className="nav-link ml-2" style={{color:"white"}}>Project Files</Link></li>
            </ul>

        </nav> 
        )
}
Navbar.propTypes ={
    title: propTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Default App"
}
export default Navbar;
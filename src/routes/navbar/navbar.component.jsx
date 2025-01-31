import { Outlet,Link } from 'react-router-dom'
import { Fragment } from 'react'
import './navbar.styles.css'
import logo from '../../assets/food-svgrepo-com.svg'

const Navigation = ()=>{
    return(
      <Fragment>
          <div className='navigation'>
              <Link className='logo-container' to='/'>
                  <img className="logo" src={logo} alt="Logo"/>
              </Link>
              <p>yum2food</p>
             <div className="nav-links-container">
                <Link className='nav-link' to='/receipes'>receipes</Link>
                <Link className='nav-link' to='/categories'>categories</Link>
                <Link className='nav-link' to='/login'>login</Link>
                <Link className='nav-link' to='/signup'>signup</Link>
                
                
             </div>
          </div>
          <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;





// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./navbar.styles.css";

// const Navbar = () => {
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("user"));

//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         navigate("/login");
//     };

//     return (
//         <nav className="navbar">
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/categories">Categories</Link></li>
//                 <li><Link to="/recipes">Recipes</Link></li>
//                 {user ? (
//                     <li onClick={handleLogout} style={{ cursor: "pointer", color: "red" }}>Logout</li>
//                 ) : (
//                     <>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/signup">Signup</Link></li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

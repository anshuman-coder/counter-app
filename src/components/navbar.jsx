import React, { Component } from 'react';

//stateless functional component

const Navbar = ({ totalCounter }) => {

  console.log('Navbar - rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              Navbar{" "} 
                <span className="badge badge-pill badge-secondary">
                  {totalCounter}
                </span>
            </a>
        </div>
      </nav>
     );
}
 
export default Navbar;
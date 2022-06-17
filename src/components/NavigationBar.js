import {Nav,Navbar} from 'react-bootstrap';
import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from './pics/logo.jpg';

const NavigationBar=()=>{
  return(
    <>
      <div className='container1'>
        <span>
          <img src={logo} className='logoimg' alt='Not Found'></img><br/>
          <h2 className='title'>SOOTHE</h2>
          <h3 className='title1'>~YOU DESERVE THE PEACE~</h3><br/>
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/" style={{textDecoration: 'none'}}>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/blog" style={{textDecoration: 'none'}}>Blogs</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/progress" style={{textDecoration: 'none'}}>Progress</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/appointment" style={{textDecoration: 'none'}}>Get Help</NavLink>
            
          </Nav>
        </Navbar.Collapse>
        <br/>
      </div>
    </>
      
  )
}

export default NavigationBar;
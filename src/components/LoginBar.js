import {Nav,Navbar} from 'react-bootstrap';
import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from './pics/logo.jpg';

const LoginBar=()=>{
  return(
    <>
      <div className='container1'>
        <span>
          <img src={logo} className='logoimg' alt='Not Found' style={{marginTop: '20px'}}></img><br/>
          <h2 className='title'>SOOTHE</h2>
          <h3 className='title1'>~YOU DESERVE THE PEACE~</h3><br/>
        </span>
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: '570px'}}>
          <Nav className="ml-auto">
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/" style={{textDecoration: 'none'}}>Login</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/register" style={{textDecoration: 'none'}}>Register</NavLink>
          </Nav>
        </Navbar.Collapse>
        <br/>
      </div>
    </>
      
  )
}

export default LoginBar;
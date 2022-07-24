import React, { Component } from 'react'
import './header.css'
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Header () {
  
    return (
      <div className='headerContainer'>
        <div className='logo'>
            <h3>Evan Foundation</h3>
        </div>
        <div className='menu'>
          <NavLink exact className={'menuItems'} to='/'>About Us</NavLink>
          <NavLink className={'menuItems'} to='/project'>Projects</NavLink>
          <NavLink className={'menuItems'} to='/contactus'>Contact Us</NavLink>
          <NavLink className={'menuItems'} to='/volunteer'><Button variant="contained" size='small'>Volunteer</Button></NavLink>
        </div>
        

      </div>
    )

}

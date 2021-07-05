import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';


export default function NavBar (){
  return (
    <header>
      <nav className='navBar'>
        <ul className='NavBTNs'>
          <li><NavLink exact to ='/app/home' activeClassName='active' className='link'>Home</NavLink></li>
          <li><NavLink exact to ='/app/createRecipe' activeClassName='active'className='link'>New Recipe!</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};



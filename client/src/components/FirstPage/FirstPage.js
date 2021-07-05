import React from "react";
import { Link } from 'react-router-dom';
import './FirstPage.css';


export default function FirstPage () {
  
    return (
      <div className="firstPage">
        <div className='firstPage_btn'>
          <Link exact to="/app/home" className="startBTN">Start!</Link>
        </div>
      </div>
    );
};



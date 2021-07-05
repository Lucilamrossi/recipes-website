import React from "react";
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import '../FirstPage/FirstPage.css'

export default function NotFoundPage () {
    return (
        <div className='not-found'>
            <Link exact to="/app/home" id='notFoundPage' className="startBTN">Go back home!</Link>
        </div>
    );
};

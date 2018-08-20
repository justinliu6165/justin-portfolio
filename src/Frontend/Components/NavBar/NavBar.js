import React from 'react';
import './NavBar.less';

export default function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar-item"><a href='/'>Portfolio</a></li>
                <li className="navbar-item"><a href='#project-container'>Recent Work</a></li>
                <li className="navbar-item"><a href='#aboutpage'>About</a></li>
                <li className="navbar-item"><a href='#aboutpage'>Contact</a></li>
            </ul>
        </nav>
    )
}
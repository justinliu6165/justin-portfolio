import React from 'react';
import './HomePage.less';
import NavBar from '../NavBar/NavBar';

export default function HomePage() {
    return (
        <div className="header">
            <NavBar />
            <div className="title">
                <div className="name">Justin Liu</div>
                <div className="mini">Junior Web Developer</div>
            </div>
        </div>
    )
}
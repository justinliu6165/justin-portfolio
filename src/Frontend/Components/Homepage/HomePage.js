import React from 'react';
import './HomePage.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomePage() {
    return (
        <div id="hero-container">
            <div className="overlay-container">
                <div className="top-overlay">
                    <div className="top-overlay-sect"></div>
                    <div className="top-overlay-sect"></div>
                    <div className="top-overlay-sect"></div>
                </div>
                <div className="bottom-overlay">
                    <div className="bottom-overlay-sect"></div>
                    <div className="bottom-overlay-sect"></div>
                    <div className="bottom-overlay-sect"></div>
                </div>
            </div >
            <div className="hero-title">
                Justin Liu
                <span>Junior Software Developer</span>
            </div>
            <FontAwesomeIcon icon="angle-down" className="arrow-icon"/>
        </div >
    )
}
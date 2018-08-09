import React from 'react';
import './TechSkills.less';
import CSS3Icon from '../Icons/CSS3Icon';
import HTMLIcon from '../Icons/HTML5Icon';
import ReactIcon from '../Icons/ReactIcon';
import JavaScriptIcon from '../Icons/JavascriptIcon';
import NodeIcon from '../Icons/NodeIcon';
import MongoDBIcon from '../Icons/MongoDBIcon';
import ExpressJSIcon from '../Icons/ExpressIcon';

export default function TechSkills() {
    return (
        <div id="skills-container">
        <div className="skills-title">Technical Skills</div>
            <ul className="skills-list">
                <li className="skills"><div><JavaScriptIcon/>Javascript</div></li>
                <li className="skills"><div><ReactIcon/>ReactJS</div></li>
                <li className="skills"><div><CSS3Icon/>CSS3</div></li>
                <li className="skills"><div><HTMLIcon/>HTML5</div></li>
                <li className="skills"><div><NodeIcon/>NodeJS</div></li>
                <li className="skills"><div><ExpressJSIcon/>ExpressJS</div></li>
                <li className="skills"><div><MongoDBIcon/>MongoDB</div></li>
            </ul>
        </div>
            )
} 
import React from 'react';
import './Projects.less';

export default class Projects extends React.Component {

    render() {
        return (
            <div id="project-container">
                <div className="project-title">Projects</div>
                <div className="thumbnail-container">
                    <div className="kodflix-thumbnail thumbnail">
                        <div class="overlay">
                            <div className="description">
                                <h3>KODFLIX</h3>
                                <p>A video platform that brings trailers in a friendly UI setting</p>
                                <a href="https://github.com/justinliu6165/kodflix">Visit GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="citygem-thumbnail thumbnail">
                        <div class="overlay">
                            <div className="description">
                                <h3>CITYGEM</h3>
                                <p>Explore the hidden gems of a city</p>
                                <a href="https://github.com/justinliu6165/citygem">Visit GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="rgbgame-thumbnail thumbnail">
                        <div class="overlay">
                            <div className="description">
                                <h3>RGB Game</h3>
                                <p>A game to improve your RGB Knowledge</p>
                                <a href="https://github.com/justinliu6165/RGB-Game">Visit GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// [
//     'menu', this.state.showMenu ? 'toggle-menu' : ''
// ].join(' ')
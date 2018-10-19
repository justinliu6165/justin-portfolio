import React, { Component } from 'react';
import './Canvas.less';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    async componentDidMount() {
        await this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        await this.updateCanvas();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        const dpi = window.devicePixelRatio;
        this.drawSpots(ctx, dpi);
    }

    drawSpots(ctx, dpi) {
        this.fix_dpi(ctx, dpi);
        let { width, height } = this.state;
        this.circleArray(width, height)
    }

    circleArray(width, height) {
        let circleArray = [];
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * width;
            let y = Math.random() * height;
            ctx.beginPath();
            ctx.arc(x, y, 0.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.stroke();
        }
    }


    //to fix the blur and scale circles accordingly
    fix_dpi(ctx, dpi) {
        let style_height = ctx.canvas.clientHeight;
        let style_width = ctx.canvas.clientWidth;
        ctx.canvas.setAttribute('height', style_height * dpi);
        ctx.canvas.setAttribute('width', style_width * dpi);
    }

    // animate() {
    //     requestAnimationFrame(animate); //recursive function
    //     // context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //     for (let i = 0; i < circleArray.length; i++) {
            
    //     }
    // }

    render() {
        return (
            <div className="canvas-container" >
                <canvas ref="canvas"></canvas>
            </div>
        )
    }
}

export default Canvas;
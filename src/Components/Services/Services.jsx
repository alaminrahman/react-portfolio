import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

const Services = () => {
    return (
        <div className="services">
            {/* Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod, minima dolorum excepturi <br/>repudiandae quos iure, distinctio veniam aperiam.</span>

                <button className="button s-button">Download CV</button>
              
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* Rightside */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card 
                    emoji = { HeartEmoji }
                    heading = { 'Design' }
                    detail = { 'Figma, Sketch, Photoshop, Adobe, Adobe XD' }
                     />
                </div>

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card 
                    emoji = { Glasses }
                    heading = { 'Developer' }
                    detail = { 'Html, Css, Javascript, React' }
                     />
                </div>

                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card 
                    emoji = { Humble }
                    heading = { 'UI/UX' }
                    detail = { 'Lorem ispu dummy text are usually use in section where.' }
                     />
                </div>

                <div className="blur s-blur2" 
                    style={{          
                        background: "var(--purple)"
                    }}></div>
            </div>

        </div>
    );
}

export default Services;
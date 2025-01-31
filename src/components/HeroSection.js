import React from 'react';
import '../App.css';
import  { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        {/*<video src='/Home page back.mp4' autoPlay loop muted />*/}
        <h1>Robloxify:</h1>
        <h2>Memes Unleashed</h2>
        
        <p>Stuck on creating a name for your Roblox game? Check out our name generator!</p>

        <div className="hero-btns">
            <Button 
              link="/form-page"
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('animal creation')}>
                GENERATE!
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;

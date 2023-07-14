import React from 'react'
import { useState } from 'react';
import './Footer.css';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {SiUber} from 'react-icons/si';
import {BsCarFrontFill} from 'react-icons/bs';

const footer = () => {


  return (
    <div className='footer-container'>
        {/* <h1 className='name'>ReadyToGo</h1> */}
        <div className="footer-section">
          <div className="footer-link">
            <div className="footer-div">
              <h4>MAY WE HELP YOU?</h4>
              <a href="/Contact Us"></a>
              <p>Contact Us</p>
              <a href="/My Order"></a>
              <p>My Ride</p>
              <a href="/FAQs"></a>
              <p>FAQs</p>
              <a href="/Email Unsubscribe"></a>
              <p>Email Unsubscribe</p>
              <a href="/Sitemap"></a>
              <p>Ride</p>
            </div>
            <div className="footer-div">
              <h4>THE COMPANY</h4>
              <a href="/About Ready To Go"></a>
              <p>About ReadToGo</p>
              <a href="/Careers"></a>
              <p>Ride</p>
              <a href="/Privacy & Cookie Policy"></a>
              <p>Privacy & How iT Works</p>
              <a href="/Corporate Information"></a>
              <p>Corporate Information</p>
            </div>
            <div className="footer-div">
              <h4>Join Us on...</h4>
              <div className="socialmedia">
              <a href="/">
            <AiFillInstagram
             size = {24}
             color='pink'
             style={{marginRight: '15px'}}
          
             /> 
          </a>
          <a href="/">
            <AiFillFacebook
             size = {24}
             color='blue'
             style={{marginRight: '15px'}}
             /> 
          </a>
          <a href="/">
            <BsCarFrontFill
             size = {24}
             style = {{color: 'white', marginRight: '15px'}}
             /> 
          </a>
          <a href="/">
            <SiUber
             size = {24}
             style = {{color: 'white',}}
             /> 
          </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="footer-below">
              <div className="footer-copyright">
                <p>
                  @ 2023-2025 ReadToGo right reserved
                </p>
              </div>
              <div className="footer-down">
                <a href="/terms"><div >
                  <p>Terms & Condition</p></div></a>
                  <a href="/security"><div >
                  <p>Security</p></div></a>
                  <a href="/cooki"><div >
                  <p>How iT Works</p></div></a>
              </div>
              </div>
        </div>
    </div>
  )
}

export default footer;

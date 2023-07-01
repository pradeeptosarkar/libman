import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Chief Librarian</p>
                        <p>Government Public Library, Delhi Central</p>
                        <p>New Delhi - 110011</p>
                        <p>Delhi</p>
                        <p>India</p>
                        <p><b>Email:</b>delhi_central@gpl.nic.in</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Useful Links</h1>
                        <a href='#home'>Daily News</a>
                        <a href='#home'>GoI Portal</a>
                        <a href='#home'>Digital India</a>
                        <a href='#home'>Places to see in Delhi</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Chief Librarian</h1>
                        <p>Miss Anuradha Sharma</p>
                        <p>PhD</p>
                        <p>Contact: +91 00000 00000</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2023 copyright all right reserved<br /><span>Made with ❤️ by <a href="https://github.com/pradeeptosarkar">Pradeepto Sarkar</a></span></p>
            </div>
        </div>
    )
}

export default Footer
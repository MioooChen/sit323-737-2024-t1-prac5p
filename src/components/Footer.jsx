import React from 'react';
import './footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          SIGN UP FOR OUR DAILY INSIDER!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>How to create a profile</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
          </div>          
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>For Client</h2>
            <Link to='/'>How to post a job</Link>
            <Link to='/'>Find dev</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
          <div className='footer-link-items'>
          <h2>Social Media</h2>
            <Link to='/' className='social-media-link'>
              <FaInstagram className='social-media-icon' />
              <span className='social-media-text'>Instagram</span>
            </Link>
            <Link to='/' className='social-media-link'>
              <FaFacebookF className='social-media-icon' />
              <span className='social-media-text'>Facebook</span>
            </Link>
            <Link to='/' className='social-media-link'>
              <FaYoutube className='social-media-icon' />
              <span className='social-media-text'>Youtube</span>
            </Link>
            <Link to='/' className='social-media-link'>
              <FaTwitter className='social-media-icon' />
              <span className='social-media-text'>Twitter</span>
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
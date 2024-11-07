import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
            <div className='footer-inner'>
                  <div className='footer-logo'>
                    <img src='https://internship.aicte-india.org/uploads/logo/CORPORATE610674ffcb6fc1627813119.png' alt='Compant Logo'/>
                    <p>Be the Jeshtah</p>
                  </div>
                  <ul className='footer-list'>
                    <li>SERVICES</li>
                    <li>SUPPORT</li>
                    <li>CONNECT WITH US</li>
                  </ul>
            </div>
      </div>
    );
  }
}

export default Footer;

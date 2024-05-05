import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import playbtn from "../Images/icons8-play-48.png"
import Travelgirl from '../Images/TravelGirl.png'
import MenuBar from '../Images/icons8-menu-50 (1).png'
import weather from '../Images/weather.png'
import flight from '../Images/flight.png'
import entertainment from '../Images/entertainment.png'
import pfp from '../Images/pfp.png'
import pfp1 from '../Images/pfp1.png'
import pfp2 from '../Images/pfp2.png'
import custom from '../Images/custom.png'
import city1 from '../Images/city1.png'
import city2 from '../Images/city2.jpg'
import city3 from '../Images/city3.png'
import jd from '../Images/jd.png'
import "./Header.css"

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [currentDiv, setCurrentDiv] = useState('divA');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        // Rotate through divs A, B, C
        setCurrentDiv((prevDiv) => {
          switch (prevDiv) {
            case 'divA':
              return 'divB';
            case 'divB':
              return 'divC';
            case 'divC':
              return 'divA';
            default:
              return 'divA';
          }

        });
      }
    }, 3000); // Change div every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleButtonClick = (div) => {
    setCurrentDiv(div);
  };
  return (
    <>
      <div className='maindiv'>
        <div className='backgroundimage'>
          <header>
            <div className='logo'><img src={jd} width="30vw" /></div>

            <img src={MenuBar} className='menubar' onClick={toggleDropdown} />

            {isDropdownOpen && (
              <div className='dropdown'>
                <ul>
                  <li>Destinations</li>
                  <li>Hotel</li>
                  <li>Flight</li>
                  <li>Bookings</li>
                  <li>Login</li>
                  <li className='SignUp'>Sign up</li>
                </ul>
              </div>
            )}
          </header>
          <body>
            <div className='section1'>
              <h4>BEST DESTINATION AROUND THE WORLD</h4>
              <h1>Travel, enjoy and live a new and full life</h1>
              <h5>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</h5>
              <div className='btn1'>
                <button className='btn2'>Find out more</button>
                <button className='btn3'><img src={playbtn} width="25vw" />Play Demo</button>
              </div>
            </div>
            <img src={Travelgirl} width="45%" className='travelgirl' />
          </body>
        </div>
        <div className='section2'>
          <div className='section2-sub1'>
            <h4>CATEGORY</h4>
            <h1>We Offer Best Services</h1>
          </div>
          <div className='section2-sub2'>
            <div className='section2-content'>
              <img src={weather} width='100' />
              <h2>Calculated Weather</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.</h5>
            </div>
            <div className='section2-content'>
              <img src={flight} width='100' />
              <h2>Best Flights</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.</h5>
            </div>
            <div className='section2-content'>
              <img src={entertainment} width='120' />
              <h2>Best Flights</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.</h5>
            </div>
            <div className='section2-content'>
              <img src={custom} width='100' />
              <h2>Customization</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.</h5>
            </div>
          </div>
        </div>
        <div className='section3'>
          <div className='section3-sub1'>
            <h4>Top Selling</h4>
            <h1>Top Destinations</h1>
          </div>
          <div className='section3-sub2'>
            <div className='section3-sub3'><img src={city1} />
              <div className='section3-sub4'>
                <div className='section3-sub6'>
                  <h5>Rome, Italy</h5>
                  <h5>$13k</h5>
                </div>

              </div>
            </div>
            <div className='section3-sub3'><img src={city2} />
              <div className='section3-sub4'>
                <div className='section3-sub6'>
                  <h5>London, UK</h5>
                  <h5>$7.4k</h5>                </div>

              </div></div>
            <div className='section3-sub3'><img src={city3} />
              <div className='section3-sub4'>
                <div className='section3-sub6'>
                  <h5>Full Europe</h5>
                  <h5>$15k</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section4'>
          <div className='section4-sub1'>
            <h4>Testimonials</h4>
            <h1>What People Say About Us</h1>
            < div id="div2" className='section4-sub2'>
              <button onClick={() => handleButtonClick('divA')}></button>
              <button onClick={() => handleButtonClick('divB')}></button>
              <button onClick={() => handleButtonClick('divC')}></button>
            </div>
          </div>
          <div className='section4-sub3'>
            <div id="div1" className='section4-sub3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {currentDiv === 'divA' &&
                <div className="divA">
                  <img src={pfp} width='65vw' alt="" />
                  <p>"Outstanding service! JD Travel Agency took care of every detail, making my vacation stress-free and unforgettable. Highly recommend!"</p>
                  <h3>Mike</h3>
                  <h4>London, United Kingdom</h4></div>}
              {currentDiv === 'divB' && <div className="divB">
                <img src={pfp1} width='65vw' alt="" />
                <p>"Incredible trip thanks to JD Travel Agency. Expertise, personalized service, and seamless planning made all the difference. 5 stars!"</p>
                <h3>Paula</h3>
                <h4>Rome, Italy</h4></div>}
              {currentDiv === 'divC' && <div className="divC">
                <img src={pfp2} width='65vw' alt="" />
                <p>"Exceeded expectations! JD Travel Agency provided valuable insights and expert guidance. My vacation was perfect thanks to their dedication."</p>
                <h3>sharon</h3>
                <h4>London, United Kingdom</h4></div>}
            </div>
          </div>
        </div>
        <div className='section5'>
          <h2>Subscribe to get information, latest news and other interesting offers from JD</h2>
          <div>
            <form action="submit">
            <input type="email" placeholder='Your Email...' />
            <button>Subscribe</button>
            </form>
          </div>
        </div>
        <footer>
          <div className='footer1'>
            <h3>JD Travel Agency</h3>
            <h5>Book your trip in minute, get full Control for much longer.</h5>
          </div>
          <div className='footer2'>
            <h4>Company</h4>
            <h5>About</h5>
            <h5>Career</h5>
            <h5>Mobile</h5>
          </div>
          <div className='footer3'>
            <h4>Contact</h4>
            <h5>FAQ</h5>
            <h5>Press</h5>
            <h5>Affilates</h5>
          </div>
          <div className='footer4'>
            <h4>More</h4>
            <h5>Airline Fees</h5>
            <h5>Airline</h5>
            <h5>Low fare flights</h5>
          </div>
        </footer>
        <div className='rights'>All rights reserved ©jdtech</div>
      </div>
    </>
  )
}

export default Header

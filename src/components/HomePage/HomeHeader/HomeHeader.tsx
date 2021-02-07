import React, { useState } from 'react';
import './HomeHeader.css';
// import Search from './Search';
import {NavLink} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../../Profile/Profile';
import mflix from '../../../media/mflix.png';
import darklogo from '../../../media/darklogo.png';
import { Link } from 'react-router-dom';



const HomeHeader = () => {

    const [click, setClick] = useState(false);    //state for hamburger menu
    // const handleClick = () => setClick(!click);    //handles click for burger change
    // const closeMobMenu = () => setClick(false);   // handles menu bar appear

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [navbar, setNavbar] = useState(false); //navbar color change on scroll

  const activeNavbar = () => {
      if (window.scrollY >= 80) {
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  }

  window.addEventListener('scroll', activeNavbar);

    // const [navbar, setNavbar] = useState(false); //navbar color change on scroll
    // const { isAuthenticated } = useAuth0();

    // const activeNavbar = () => {
    //     if (window.scrollY >= 80) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener('scroll', activeNavbar);
    
    let iconStyle = {
        color: '#fff',
        fontSize: '1rem'
    }

    const [logoSpread, setLogoSpread] = useState(false);
    
    return(
        <> 
        {/* {isAuthenticated && ( */}
        <nav className={logoSpread? 'navbarhomespread' : 'navbarhome'}>
            <div className="background">
                <Link to='/'>
                    <img onMouseOver={() => setLogoSpread(prevMode => !prevMode)} src={mflix} alt="logo" className={logoSpread ? "logohomespread" : "logohome"}/>
                </Link>
                <div className="info">
                    <img src={darklogo} className={logoSpread? "logoM" : "no"}/>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* <div className = "navigation"> */}
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
                            <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                            </li>
                            
                            <li className='nav-item'>
                            <Link
                                to='/movies/page/:page'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Browse Movies
                            </Link>
                            </li>

                            <li className='nav-item'>
                            <Link
                                to='/graph'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Graph
                            </Link>
                            </li>
                            </ul>
                            {/* </div> */}
                    <div className={logoSpread? "line" : "no"}></div>
                    <div className={logoSpread? "info-content" : "no"}>
                        <h2>mflix</h2>
                        <p>mflix is your companion on movie searching. it is a movie search app containing
                            thousands of movies that includes their details such as titles, directors, casts, genres
                            and other important information
                        </p>
                    </div>
                </div>
                <div className='account-section'>
                    {/* <Search /> */}
                    <Profile />
                </div>
            </div>
        </nav>
        {/* )}   */}
        </>
    );
}

export default HomeHeader;

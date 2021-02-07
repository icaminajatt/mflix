import React from 'react';
import joker from '../../media/Login-joker.png';
import mflix from '../../media/mflix.png';
import './LoginSection.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react'

const LoginSection: React.FC = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const [color, setColor] = useState(false);

    return (
        <>
        {!isAuthenticated && (
        <div>
            <div className = "header">
                <img src={mflix} className={color? "colorlogo" : "graylogo"}/>
            </div>
            <main>
                <div className="content">
                    <h1 className={color? "colorh1" : "nocolor"}>Color up your life.</h1>
                    <p>Unlimited movies. Unlimited choices. Unlimited ways to brighten up your day.</p>
                    <p>Movie Discoveries in just one click.</p><br /><br />
                    <button className="login" onMouseOver={() => setColor(prevMode => !prevMode)} onClick={() => loginWithRedirect({ screen_hint: 'signup' })} >Sign in with Google</button>
                </div>
                <div>
                    <img src={joker} className={color ? "color" : "gray"}/>
                </div>
            </main>
        </div>
        )
        }
        </>
    )
};

export default LoginSection;
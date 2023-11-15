import React, {useState, useEffect} from 'react';
import {Link, Element, animateScroll as scroll} from 'react-scroll';
import './welcome.css';

function Welcome() {

    return (
        <div className=''>
            <Element name="welcome" className="flex-container">
                <div className="item">
                    <h1>Welcome to Ambiance Space</h1>
                </div>
                <div className="item">
                    <p>
                        Your space is not just a place; it's a canvas waiting to be filled with stories.
                        We specialize in translating your dreams into reality, ensuring that each corner
                        narrates a tale as unique as yours. From conceptualization to execution, every
                        detail is crafted with precision to reflect your personality.
                    </p>
                </div>
                <Link
                    to="explore"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    className="explore-button">
                    Explore
                </Link>
            </Element>
        </div>
    );
}

export default Welcome;

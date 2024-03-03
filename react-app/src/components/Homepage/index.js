import React from 'react';
import { useHistory } from 'react-router-dom';
import './Homepage.css'
import OpenModalButton from '../OpenModalButton';
import Form from '../Form';
import { useState } from 'react';
import cryptic from '../../images/cryptic.png'
import cryptic2 from '../../images/cryptic2.png'

function Homepage() {
    const history = useHistory();
    // State to keep track of clicks on the homepage
    const [clickCount, setClickCount] = useState(0);
    // State to control the visibility of the buttons
    const [showButtons, setShowButtons] = useState(false);

    const navToMembers = () => {
        history.push('/members')
    }

    // Function to handle clicks on the homepage
    const handleHomepageClick = () => {
        // Increment click count
        setClickCount(prevCount => prevCount + 1);

        // If the homepage has been clicked 7 times, show the buttons
        if (clickCount + 1 === 6) {
            setShowButtons(true);
        }
    }

    return (
        <div className='homepage-div' onClick={handleHomepageClick}>
            <img className='cryptic-code' src={cryptic} alt=''/>
			<img className='cryptic-code' src={cryptic2} alt=''/>
            <div className='link-div' style={{display: showButtons ? 'block' : 'none'}}>
                <OpenModalButton className='homepage-button join' buttonText='Join' modalComponent={<Form />} />
                <button className='homepage-button members' onClick={navToMembers}>
                    Founders
                </button>
            </div>
        </div>
    );
}

export default Homepage
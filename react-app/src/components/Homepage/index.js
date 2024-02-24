import React from 'react';
import { useHistory } from 'react-router-dom';
import './Homepage.css'
import OpenModalButton from '../OpenModalButton';
import Form from '../Form';


function Homepage() {
	const history = useHistory();

	const navToMembers = () => {
		history.push('/members')
	}

	

    return (
        <div className='homepage-div'>
            <h2>Welcome to the Gateway</h2>
			<p className='main-p-tag'>Have you been granted access?</p>
			<div className='link-div'>
			<OpenModalButton  className='homepage-button join' buttonText='Join' modalComponent={<Form />} />
           
			<button className='homepage-button members' onClick={navToMembers}>
                Members
            </button >

			</div>
        </div>
    );
}

export default Homepage
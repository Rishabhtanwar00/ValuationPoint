import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { TiLocation } from 'react-icons/ti';

const ContactInfoCard = () => {
	return (
		<div className='contact-info'>
			<h2>Contact Information</h2>
			<p>You can directly reach us on below contact information.</p>
			<span className='mobile-info'>
				<IoMdCall />
				+91 9876543210
			</span>
			<span className='email-info'>
				<GrMail />
				valuationpoint@gmail.com
			</span>
			<span className='location-info'>
				<TiLocation />
				New Delhi, India
			</span>
		</div>
	);
};

export default ContactInfoCard;

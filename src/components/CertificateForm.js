import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CertificateForm = () => {
	const handlesubmit = (e) => {
		e.preventDefault();
		alert('form submitted.');
	};
	return (
		<form>
			<div className='input-container'>
				<Fade direction='right'>
					<label>Your Name</label>
				</Fade>
				<input type='text' name='Name' placeholder='enter name here' />
			</div>
			<div className='input-container email-input'>
				<Fade direction='right'>
					<label>Your Email</label>
				</Fade>
				<input type='email' name='Email' placeholder='enter email here' />
			</div>
			<div className='input-container'>
				<Fade direction='right'>
					<label>Your Phone No.</label>
				</Fade>
				<input type='text' name='Phone' placeholder='enter phone no. here' />
			</div>
			<div className='input-container textarea-input'>
				<Fade direction='right'>
					<label>Message</label>
				</Fade>
				<textarea
					name='Message'
					id=''
					cols='49'
					rows='7'
					fixed='true'
					placeholder='Write your message here'
				></textarea>
			</div>
			<input
				type='submit'
				name='submit_input'
				className='submit-button'
				value='Send Message'
				onClick={handlesubmit}
			/>
		</form>
	);
};

export default CertificateForm;

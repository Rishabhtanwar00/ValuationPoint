import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const Footer = () => {
	return (
		<div className='footer-container'>
			<p className='heading'>Connect with us</p>
			<div className='social-icons'>
				<Zoom>
					<div className='social-link'>
						<Link to='https://instagram.com'>
							<FaInstagram className='social-icon' />
						</Link>
					</div>
				</Zoom>
				<Zoom>
					<div className='social-link'>
						<Link to='https://facebook.com'>
							<FaFacebook className='social-icon' />
						</Link>
					</div>
				</Zoom>
				<Zoom>
					<div className='social-link'>
						<Link to='https://www.youtube.com'>
							<FaYoutube className='social-icon' />
						</Link>
					</div>
				</Zoom>
				<Zoom>
					<div className='social-link'>
						<Link to='https://linkedin.com'>
							<FaLinkedin className='social-icon' />
						</Link>
					</div>
				</Zoom>
				<Zoom>
					<div className='social-link'>
						<Link to='https://twitter.com'>
							<FaTwitter className='social-icon' />
						</Link>
					</div>
				</Zoom>
			</div>

			<div className='footer-line'>
				<p>
					<span>© </span> 2023 Valuation Point All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;

import React from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { CiLinkedin } from 'react-icons/ci';
import { FaCity, FaGithub, FaPhoneAlt } from 'react-icons/fa';

import foto from '../img/foto.PNG';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-box-text'>
				<h1 className='hero-heading'>Mateusz Ryniewicz</h1>
				<p className='text-small-color'>Junior frontend developer</p>
				<p className='text-small'>
					A junior passionate about a web development. <br />
					Highly motivated, self-learner with the first experience. <br />
					Feels best in styling in the styled components, SCSS and CSS. Enjoys
					doing CRUD'S tasks in creating e-commerce.
				</p>
				<div className='hero-box-text-info'>
					<FaPhoneAlt className='icon-color' />
					<p className='text-small text-underline'>517 829 522</p>
				</div>
				<div className='hero-box-text-info'>
					<HiOutlineMail className='icon-color' />
					<p className='text-small text-underline'>
						ryniewiczmateusz@gmail.com
					</p>
				</div>

				<div className='hero-box-text-info'>
					<FaCity className='icon-color' />
					<p className='text-small text-underline'>Warsaw</p>
				</div>

				<div className='hero-box-text-info'>
					<FaGithub className='icon-color' />
					<p className='text-small text-underline'>
						<a
							target='_blank'
							href='https://github.com/MateuszRyniewicz'
							rel='noreferrer'>
							github.com/MateuszRyniewicz/
						</a>
					</p>
				</div>
				<div className='hero-box-text-info'>
					<CiLinkedin className='icon-color' />
					<p className='text-small text-underline'>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/mateusz-ryniewicz/'
							rel='noreferrer'>
							linkedin.com/in/mateusz-ryniewicz/
						</a>
					</p>
				</div>
			</div>
			<div className='hero-box-image'>
				<img src={foto} alt='Mateusz Ryniewicz hobbista programowania' />
			</div>
		</div>
	);
};

export default Hero;

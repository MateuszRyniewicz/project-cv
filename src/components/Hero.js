import React from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

import avatar from '../img/avatar.png';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-box-text'>
				<h1 className='hero-heading'>Mateusz Ryniewicz</h1>
				<p className='text-small-color'>Candidate Frontend developer</p>
				<p className='text-small'>
					A passionate designer and web developer, solving problems, and detail
					<br />
					attention oriented.
				</p>
				<div className='hero-box-text-info'>
					<HiOutlineMail className='icon-color' />
					<p className='text-small'>ryniewiczmateusz@gmail.com</p>
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
			</div>
			<div className='hero-box-image'>
				<img src={avatar} alt='Mateusz Ryniewicz hobbista programowania' />
			</div>
		</div>
	);
};

export default Hero;

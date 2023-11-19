import React from 'react';

const Main = () => {
	return (
		<div className='main'>
			<div className='box-experience'>
				<h3 className='text-bold-regular'>Experience</h3>

				<p className='text-small-color'>October 2023 - November 2023</p>
				<p className='text-small-color-bold-gray'>
					Intern (Wordpress)
					<span className='text-small-color-gray'> Netivo</span>
				</p>
				<p className='text-small'>
					- Helping to administrate and maintain clients' websites <br /> -
					Basic creation of Tutlo websites (first page, second page) <br />
					- Editing blogs (page) <br />- Testing pages
					<br /> - Basic activities in Wordpress
				</p>
				<div className='line'></div>

				<p className='text-small-color'>September 2017 - September 2023</p>
				<p className='text-small-color-bold-gray'>
					PPF Applicator/Senior Detailer
					<span className='text-small-color-gray'> Smart Detailing</span>
				</p>
				<p className='text-small'>
					- PPF application, complex detailing of cars
					<br /> - Contact with clients and partner companies
					<br /> - Working under time pressure
					<br /> - Supporting junior colleagues
				</p>
				<div className='line'></div>

				<p className='text-small-color'>April 2012 - August 2016</p>
				<p className='text-small-color-bold-gray'>
					Forklift driver
					<span className='text-small-color-gray'> KRM Polska</span>
				</p>
				<p className='text-small'>
					- Driving on the forklift <br /> - Orders fullfilment
					<br />- Verification of customers' orders
					<br />- Supporting the Team Leader
				</p>
				<div className='line'></div>
			</div>
			<div className='box-skills'>
				<h3 className='text-bold-regular'>Skills</h3>
				<p className='text-small-color'>March 2022 - currently</p>
				<p className='text-small'>
					Javascript -React - TypeScript (learing) - HTML - CSS - SCSS - BEM -
					Git - Github - Webpack - Styled Components - Redux ToolKit -Tailwind -
					#C
				</p>

				<h3 className='text-bold-regular'>Education</h3>
				<p className='text-small-color'>September 2022 - June 2023</p>
				<p class='text-small-color-bold-gray'>PolDevs Academy</p>
				<p className='text-small-color-gray'>
					Individual course (lessons twice a week, 5 tasks weekly, code review)
				</p>
				<div className='line'></div>

				<p className='text-small-color'>2012 - 2015</p>
				<p className='text-small-color-bold-gray'>Academy of Social Science</p>
				<p className='text-small-color-gray'>
					Administration - bachelor’s degree
				</p>
				<div className='line'></div>
				<h3 className='text-bold-regular'>Language</h3>
				<p className='text-small'>
					Polish - native
					<br /> English - limited working proficiency
				</p>
				<h3 className='text-bold-regular'>Projects</h3>
				<p className='text-small-color'>Training diary</p>
				<p className='text-small'>
					Registering and logging in, a possibility of adding, deleting and
					editing trainings
				</p>

				<p className='text-small-color'>Shop</p>
				<p className='text-small'>Adding and deleting produts from a cart</p>

				<p className='text-small-color'>Cinema</p>
				<p className='text-small'>Choosing movies and booking places</p>

				<p className='text-small-color'>Landing page</p>
				<p className='text-small'>
					Single website with a full responsiveness and semantics
				</p>

				<p className='text-small-color'>Multi step form</p>
				<p className='text-small'>
					A multi-form based on Formik wtih a Yup validation
				</p>
			</div>
		</div>
	);
};

export default Main;

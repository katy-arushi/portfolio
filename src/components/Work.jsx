import React from 'react';
import veggielicious from '../assets/projects/veggielicious-min.png';
import pomopets from '../assets/projects/pomopets-min.png';
import scheduler from '../assets/projects/scheduler-min.png';
import passwordb from '../assets/projects/passwordb-min.png';
import tweeter from '../assets/projects/tweeter-min.png';
import tinyapp from '../assets/projects/tinyapp-min.png';

const Work = () => {
	const projects = [
		{
			url: veggielicious,
			name: 'Veggielicious',
			demo: 'https://veggielicious.netlify.app/',
			code: 'https://github.com/katy-arushi/recipe-app',
			blurb:
				'Recipe app featuring vegetarian & vegan recipes. Users can filter by cuisine or use the search bar.',
			tech: 'React, Styled-Components, Spoonacular API',
			isDeployed: true,
			id: 1,
		},
		{
			url: pomopets,
			name: 'Pomodoro Timer',
			demo: 'https://pomopets.netlify.app/',
			code: 'https://github.com/katy-arushi/pomopets-client',
			blurb:
				'React productivity app that integrates a Pomodoro Timer and a digital pet.',
			tech: 'React, SASS, Bootstrap, Node, Express, Prisma',
			isDeployed: true,
			id: 2,
		},
		{
			url: scheduler,
			name: 'Interview Scheduler',
			demo: 'https://interview-scheduler-2022.netlify.app/',
			code: 'https://github.com/katy-arushi/scheduler',
			blurb:
				'React app for scheduling interviews, features unit, integration and E2E testing.',
			tech: 'React, Jest, Storybook, Cypress, CircleCI',
			isDeployed: true,
			id: 3,
		},
		{
			url: passwordb,
			name: 'Password Manager',
			demo: '/',
			code: 'https://github.com/katy-arushi/passwordb',
			blurb:
				'Passwordb allows a user to add accounts and generate secure passwords.',
			tech: 'JavaScript, HTML, CSS, SASS, jQuery, Node, PostgreSQL',
			isDeployed: false,
			id: 4,
		},
		{
			url: tweeter,
			name: 'Tweeter',
			demo: '/',
			code: 'https://github.com/katy-arushi/tweeter',
			blurb:
				'Single-page Twitter clone focusing on front-end, responsive design.',
			tech: 'JavaScript, HTML, CSS, jQuery, AJAX',
			isDeployed: false,
			id: 5,
		},
		{
			url: tinyapp,
			name: 'TinyApp URL Shortener',
			demo: '/',
			code: 'https://github.com/katy-arushi/tinyapp',
			blurb: 'App for shortening long URLs, à la bit.ly.',
			tech: 'JavaScript, EJS, Bootstrap, Node, Express',
			isDeployed: false,
			id: 6,
		},
	];

	return (
		<div
			id='work'
			className='w-full min-h-screen text-gray-300 bg-background'
		>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-6 text-lg'>
						// Check out some of my recent projects
					</p>
				</div>

				{/* container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{projects.map(project => {
						return (
							<div key={project.id}>
								<div
									style={{ backgroundImage: `url(${project.url})` }}
									className='shadow-lg shadow-shadow group container rounded-md flex justify-center items-center mx-auto content-div'
								>
									{/* hover effects*/}
									<div className='opacity-0 group-hover:opacity-100 text-center'>
										<span className='text-2xl font-bold text-white tracking-wider text-center'>
											{project.name}
										</span>
										<div className='pt-8 text-center'>
											{project.isDeployed && (
												<a href={project.demo} target='_blank' rel='noreferrer'>
													<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
														Demo
													</button>
												</a>
											)}
											<a href={project.code} target='_blank' rel='noreferrer'>
												<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
													Code
												</button>
											</a>
										</div>
									</div>
								</div>
								<p className='mt-2 p-2 lg:h-[100px] md:h-[100px]'>
									{project.blurb}
								</p>
								<p className='px-2 mt-2'>
									<span className='font-bold text-pink-600'>Made with: </span>
									{project.tech}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Work;

import React from 'react';
import veggielicious from '../assets/veggielicious.png';
import pomopets from '../assets/pomopets.png';
import scheduler from '../assets/scheduler.png';
import passwordb from '../assets/passwordb.png';
import tweeter from '../assets/tweeter.png';
import tinyapp from '../assets/tinyapp.png';

const Work = () => {

  const projects = [
		{
			url: 'veggielicious',
			name: 'Veggielicious',
			demo: 'https://veggielicious.netlify.app/',
			code: 'https://github.com/katy-arushi/recipe-app',
			id: 1,
		},
		{
			url: 'pomopets',
			name: 'Pomodoro Timer',
			demo: 'https://pomopets.netlify.app/',
			code: 'https://github.com/katy-arushi/pomopets-client',
			id: 2,
		},
		{
			url: 'scheduler',
			name: 'Interview Scheduler',
			demo: 'https://interview-scheduler-2022.netlify.app/',
			code: 'https://github.com/katy-arushi/scheduler',
			id: 3,
		},
		{
			url: 'passwordb',
			name: 'Password Manager',
			demo: '/',
			code: 'https://github.com/katy-arushi/passwordb',
			id: 4,
		},
		{
			url: 'tweeter',
			name: 'Tweeter',
			demo: '/',
			code: 'https://github.com/katy-arushi/tweeter',
			id: 5,
		},
		{
			url: 'tinyapp',
			name: 'TinyApp URL Shortener',
			demo: '/',
			code: 'https://github.com/katy-arushi/tinyapp',
			id: 6,
		},
	];
  
	return (
		<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
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
          
      {/* {projects.map(project => {
        return (
					<div
						style={{ backgroundImage: `url(${project.url})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            key={project.id}
					>
						{/* hover effects */}
						{/* <div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider text-center'>
								{project.name}
							</span>
							<div className='pt-8 text-center'>
								<a href={project.demo} target='_blank' rel='noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a href={project.code} target='_blank' rel='noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				);
      })} */}
          
          <div
						style={{ backgroundImage: `url(${veggielicious})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider text-center'>
								Veggielicious
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://veggielicious.netlify.app/'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/recipe-app'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* pomopets */}
					<div
						style={{ backgroundImage: `url(${pomopets})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Pomodoro Timer
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://pomopets.netlify.app/'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/pomopets-client'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* scheduler */}
					<div
						style={{ backgroundImage: `url(${scheduler})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Interview Scheduler
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://interview-scheduler-2022.netlify.app/'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/scheduler'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* passwordb */}
					<div
						style={{ backgroundImage: `url(${passwordb})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Password Manager
							</span>
							<div className='pt-8 text-center'>
								<a href='/' target='_blank' rel='noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/passwordb'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* tweeter */}
					<div
						style={{ backgroundImage: `url(${tweeter})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Tweeter
							</span>
							<div className='pt-8 text-center'>
								<a href='/' target='_blank' rel='noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/tweeter'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* tinyapp */}
					<div
						style={{ backgroundImage: `url(${tinyapp})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								TinyApp URL Shortener
							</span>
							<div className='pt-8 text-center'>
								<a href='/' target='_blank' rel='noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/katy-arushi/tinyapp'
									target='_blank'
									rel='noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-btn-hover'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;

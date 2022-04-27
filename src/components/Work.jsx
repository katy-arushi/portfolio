import React from 'react';
import veggielicious from '../assets/veggielicious.png'
import pomopets from '../assets/pomopets.png'
import scheduler from '../assets/scheduler.png'
import passwordb from '../assets/passwordb.png'
import tweeter from '../assets/tweeter.png';
import tinyapp from '../assets/tinyapp.png';

const Work = () => {
	return (
		<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-6'>// Check out some of my recent projects</p>
				</div>

				{/* container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* veggielicious */}
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
								<a href='https://veggielicious.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/recipe-app'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
								<a href='https://pomopets.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/pomopets-client'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
								<a href='https://interview-scheduler-2022.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/scheduler'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/passwordb'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/tweeter'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/katy-arushi/tinyapp'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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

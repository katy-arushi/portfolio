import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import resume from '../assets/resume.pdf';

const Home = () => {
	return (
		<div id='home' className='w-full h-screen bg-background'>
			{/* container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-pink-600 text-lg'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-input-bg'>
					Arushi Katyal
					<span className='text-sm pl-2'>(she/her)</span>
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm a Full Stack Developer.
				</h2>
				<p className='text-[#8892b0] text-lg py-4 max-w-[700px]'>
					I'm a Full Stack Developer specializing in exceptional digital
					experiences. I enjoy working on front-end features and creating
					elegant apps with user-focused designs. My previous work was focused
					on developing highly-performant iOS applications and improving
					technical processes and improving code quality and functionality.
				</p>

				{/* button container */}
				<div className='flex'>
					<a href='#work'>
						<button className='text-white font-bold group border-2 p-3 my-2 mr-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3' />
							</span>
						</button>
					</a>

					<a href={resume}>
						<button className='text-white font-bold group border-2 p-3 my-2 ml-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
							Resume
							<span className='group-hover:scale-150 duration-500'>
								<FiExternalLink className='ml-3' />
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;

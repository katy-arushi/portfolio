import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf'

function NavBar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-background text-gray-300'>
			<div>
				<Link to='home' smooth={true} duration={500}>
					<img src={Logo} alt='Arushi Katyal Logo' style={{ width: '75px' }} />
				</Link>
			</div>

			{/* menu */}
			<ul className='hidden md:flex'>
				<li>
					<Link
						to='home'
						smooth={true}
						duration={500}
						className='hover:text-pink-600'
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='about'
						smooth={true}
						duration={500}
						className='hover:text-pink-600'
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to='skills'
						smooth={true}
						duration={500}
						className='hover:text-pink-600'
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to='work'
						smooth={true}
						duration={500}
						className='hover:text-pink-600'
					>
						Work
					</Link>
				</li>
				<li>
					<Link
						to='contact'
						smooth={true}
						duration={500}
						className='hover:text-pink-600'
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0 font-bold'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a
							className='flex justify-between items-center w-full text-gray-100 text-bold'
							href='https://www.linkedin.com/in/katyarushi/'
							target='_blank'
							rel='noreferrer'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a
							className='flex justify-between items-center w-full text-gray-100'
							href='https://github.com/katy-arushi'
							target='_blank'
							rel='noreferrer'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
						<a
							className='flex justify-between items-center w-full text-gray-100'
							href='mailto:katy.arushi@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a
							className='flex justify-between items-center w-full text-gray-100'
							href={resume}
							target='_blank'
							rel='noreferrer'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;

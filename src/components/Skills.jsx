import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import JavaScript from '../assets/skills/javascript.png';
import React from '../assets/skills/react.png';
import Node from '../assets/skills/node.png';
// import GitHub from '../assets/skills/github.png';
import SASS from '../assets/skills/sass.svg';
import PostgreSQL from '../assets/skills/postgres.png';
import GraphQL from '../assets/skills/graphql.png'

const Skills = () => {
  const skills = [
		{
			name: 'JavaScript',
			img: JavaScript,
			alt: 'JavaScript icon',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			id: 1,
		},
		{
			name: 'React & React Native',
			img: React,
			alt: 'React icon',
			link: 'https://reactjs.org/',
			id: 2,
		},
		{
			name: 'GraphQL',
			img: GraphQL,
			alt: 'GraphQL icon',
			link: 'https://graphql.org/',
			id: 3,
		},
		{
			name: 'HTML',
			img: HTML,
			alt: 'HTML icon',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			id: 4,
		},
		{
			name: 'CSS',
			img: CSS,
			alt: 'CSS icon',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			id: 5,
		},
		{
			name: 'Sass',
			img: SASS,
			alt: 'Sass icon',
			link: 'https://sass-lang.com/',
			id: 6,
		},
		{
			name: 'Node.js',
			img: Node,
			alt: 'Node.js icon',
			link: 'https://nodejs.dev/',
			id: 7,
		},
		{
			name: 'PostgreSQL',
			img: PostgreSQL,
			alt: 'PostgreSQL icon',
			link: 'https://www.postgresql.org/',
			id: 8,
		},
		// {
		// 	name: 'GitHub',
		// 	img: GitHub,
		// 	alt: 'GitHub icon',
		// 	link: 'https://github.com/',
		// 	id: 9,
		// },
	];

  // sm:min-h-screen md:min-h-screen lg:min-h-screen
	return (
		<div
			id='skills'
			className='w-full min-h-screen bg-background text-gray-300'
		>
			{/* container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 rounded-md'>
						Skills
					</p>
					<p className='py-4 text-lg'>
						// These are some of the technologies I've worked with and specialize in
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-8'>
					{/* skill boxes */}

					{skills.map(skill => {
						return (
							<div
								className='shadow-md shadow-shadow border-2 border-pink-600 rounded-md pt-4 hover:scale-110 duration-500'
								key={skill.id}
							>
								<a href={skill.link} target='_blank' rel='noreferrer'>
									<img
										className='w-20 h-20 mx-auto'
										src={skill.img}
										alt={skill.alt}
									/>
									<p className='my-4'>{skill.name}</p>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;

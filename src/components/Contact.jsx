import React from 'react';

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full h-screen bg-background flex justify-center items-center p-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/0a1bbaf0-1c19-43d0-b584-b52e406c4e5d'
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 pt-4 text-lg'>
						// Submit the form below or send me an email
					</p>
				</div>
				<input
					className='bg-input-bg p-2 placeholder-gray-500 rounded-md'
					type='text'
					placeholder='Name'
					name='name'
					required
				/>
				<input
					className='my-4 p-2 bg-input-bg placeholder-gray-500 rounded-md'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
				<textarea
					className='bg-input-bg p-2 placeholder-gray-500 rounded-md resize-none'
					name='message'
					rows='7'
					placeholder='Message'
					required
				></textarea>
				<button className='text-white border-2 font-bold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;

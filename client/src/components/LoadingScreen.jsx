import React from 'react'

const LoadingScreen = () => {
	return (
		<div className='fixed inset-0 bg-gray-50 dark:bg-[#242424] flex items-center justify-center'>
			<div className='grid items-center justify-center justify-items-center'>
				<div className='loading-btn rounded-full flex items-center justify-center h-36 aspect-square mb-8'>
					<h2 className='font-bold'>LOGO</h2>
				</div>
				<p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400'>SMART HOMES</p>
			</div>
		</div>
	)
}

export default LoadingScreen
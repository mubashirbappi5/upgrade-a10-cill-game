import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-5 md:px-12">
		<h1 className="p-4 text-4xl font-semibold leading-none text-center">What gamers are saying about Cill Gamer</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-800">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-200">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-500">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>"Cill Gamer provides the most in-depth and honest reviews for every game I’ve played. A must-check for gamers!"
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-500">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-700 dark:text-gray-100">
				<img src="https://i.ibb.co.com/yk3C0Xn/IMG-1075-removebg-preview.png" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-300" />
				<p className="text-xl font-semibold leading-tight">Bappi hassan</p>
				<p className="text-sm uppercase">pro gamer</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-800">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-200">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-500">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>"The insights provided by Cill Gamer are unmatched. I trust their reviews before buying any game!"
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-500">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-700 dark:text-gray-100">
				<img src="https://i.ibb.co.com/st4BqtP/21852-removebg-preview.png" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-300" />
				<p className="text-xl font-semibold leading-tight">Toriqul islam</p>
				<p className="text-sm uppercase">Pro Gamer</p>
			</div>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Testimonial;
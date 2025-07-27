'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/F9075DF0-B9C3-494E-A818-C6FE78B2068F_1_201_a.jpeg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">David Jumper</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Software Engineer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I am a passionate and detail-oriented Software Engineer with a BS in Computer Science from Cal Poly SLO currently seeking my first professional development position as an opportunity to put my education to practice and grow my career. 
					Experienced in Agile development and building scalable solutions using Java, C++, and Python. 
					Eager to collaborate and be a part of an innovative team that values creativity and purposeful tech in order to build clean, efficient, and scalable solutions that make a real-world impact. 
					I love playing piano, producing music, and watching movies in my free time.
				</p>
			</div>
		</section>
	);
}

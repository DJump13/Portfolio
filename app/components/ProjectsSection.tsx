import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src='/femr.png' alt='fEMR' fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">fEMR</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">
								Offline Dynamic Translation with a NMT model in a Java EMR application.
							</p>
							<div className="flex gap-2">
								<a href="/fEMR" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
									View Project →
								</a>
							</div>
						</div>
					</div>
					<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src='/rl.png' alt='rl' fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Rocket League Simulator</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">
								Rocket League Simulator using C++ and OpenGL.
							</p>
							<div className="flex gap-2">
								<a href="/RocketLeague" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
									View Project →
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

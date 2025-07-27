'use client';

import ContactSection from '../components/ContactSection';
import Image from 'next/image';

export default function SimplePortfolio() {
    return (
        <main className="min-h-screen bg-gray-900 pt-12">
            <section className="py-12 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a href="/" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
                        Back ←
                    </a>
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Rocket League Simulator</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                            This project is a rudimentary version of the training mode in the video game Rocket League. 
                            The game involves playing soccer in an enclosed field using a car that the player controls. 
                            The training mode of this game puts the player’s car in an empty field alone with a ball that can be scored in either goal. 
                            My program was an attempt to recreate this aspect of the game. 
                        </p>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/rl.png' alt='rl' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">GitHub</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">
                                    TODO
                                </p>
                                <div className="flex gap-2">
                                    <a target='_blank' href="https://github.com/mork-cal-poly/project3-DJump13" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/rlprojectdelivery.jpg' alt='fEMR' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Delivery</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">
                                    TODO
                                </p>
                                <div className="flex gap-2">
                                    <a target='_blank' href="https://docs.google.com/document/d/1zySSTr8tJAmTQnxZmseDzwjWEfGPIoHMjOL5oyzho4E/edit?usp=sharing" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View Project Delivery →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Video Demos</h3>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <video width="400" height="240" controls>
                        <source src="/70111885671__CE5617BB-CF15-4631-9975-48035067E5BD.MOV" type="video/quicktime"/>
                            Your browser does not support the video tag.
                        </video>
                        <video width="400" height="240" controls>
                        <source src="/70141974568__2885D747-8AA2-4A86-9CDA-A8186D8B4632.MOV" type="video/quicktime"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}

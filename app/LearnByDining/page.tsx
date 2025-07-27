'use client';

import Link from 'next/link';
import ContactSection from '../components/ContactSection';
import Image from 'next/image';

export default function SimplePortfolio() {
    return (
        <main className="min-h-screen bg-gray-900 pt-12">
            <section className="py-12 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
                        Back ←
                    </Link>
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Learn By Dining</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                            A food review website for Cal Poly dining. 
                            Allows for user-input reviews specific to restaurants. 
                            The reviews contain a star rating out of 5 and a character-limited description. 
                            There is a home page of the restaurants, a submit-review page, and a restaurant-specific page with the restaurant`&apos;`s menu items, and user-reviews. 
                            A user can search for restaurants, and search for menu items. 
                            Similarly, a user can sort the reviews based on the star ratings.
                            Built with MongoDB, Express.js, React, and Node.js (MERN).
                        </p>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/LearnByDining.jpg' alt='rl' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">GitHub</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">
                                    TODO
                                </p>
                                <div className="flex gap-2">
                                    <Link target='_blank' href="https://github.com/domdavidson251/307" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View GitHub →
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <embed src="/LearnByDining.pdf" width="400" height="375" 
                            type="application/pdf"/>
                    </div>
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Video Demo</h3>
                    </section>
                    <div className="flex flex-row justify-center items-center">
                        <video width="800" height="240" controls>
                        <source src="/learnbydining.mov" type="video/quicktime"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}

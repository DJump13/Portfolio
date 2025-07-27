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
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">fEMR</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                            Team fEMR is a nonprofit organization dedicated to providing continuity of care between short-term medical relief efforts in low resource settings all around the world.
                            fEMR is a fast Electronic Medical Records (EMR) system for remote clinics who depend on speed and ease of use. 
                            Being a global project, it is important the application supports as many languages as possible.
                            Designed for use in areas without internet access, our team was in charge of implementing dynamic translation functionality to the existing interface,
                            allowing for fast, offline translation of medical provider notes and input forms.
                            Made changes to legacy Java code, implemented a local HTTP server to continually run a Python translation script
                            using a neural machine translation (NMT) model for offline translation, and worked with another team to 
                            redesign MySQL database schemas and tables to support dynamic translation.
                        </p>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/femr.png' alt='fEMR' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">fEMR GitHub</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">
                                    TODO
                                </p>
                                <div className="flex gap-2">
                                    <Link target='_blank' href="https://github.com/FEMR/femr" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View GitHub →
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <embed src="/femr.pdf" width="400" height="375" 
                                    type="application/pdf"/>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Delivery</h3>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <embed src="/temr.pdf" width="400" height="375" 
                                    type="application/pdf"/>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Technical Specifications</h3>
                            </div>
                        </div>
                    </div>
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Video Demos</h3>
                    </section>
                    <div className="flex flex-row justify-center items-center">
                        <iframe width="800" height="450" src="https://docs.google.com/file/d/1u5q3rJstJdy6SAyAOP7Mk8fTrE7x9LMq/preview"/>
                        
                    </div>
                    <br/>
                    <div className="flex flex-row justify-center items-center">
                        <iframe width="800" height="450" src="https://docs.google.com/file/d/1KUlhkrq0jroK9Fxg_WL0697XU9FyBgfw/preview"/>
                    </div>
                    
                </div>
            </section>
            <ContactSection />
        </main>
    );
}

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
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Windborne Weather Balloon Tracker</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                            Designed and implemented a real-time web application to visualize Windborne weather balloon telemetry using JavaScript 
                            and WebGL (Three.js). The system ingests live and historical telemetry data, converts geospatial latitude, longitude, 
                            and altitude into 3D Cartesian coordinates, and renders rolling 24-hour trajectory paths for multiple balloons. 
                            Integrated external APIs to fetch location-based UV index data and synchronize it with live positional updates, 
                            enabling accurate, time-aware environmental visualization. This project emphasizes efficient data transformation, 
                            real-time rendering, and scalable handling of continuously updating geospatial datasets.
                        </p>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/wb1.png' alt='windborne tracker github' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Windborne Tracker GitHub</h3>
                                <div className="flex gap-2">
                                    <Link target='_blank' href="https://github.com/FEMR/femr" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View GitHub →
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src='/wb2.png' alt='windborne tracker' fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Windborne Weather Balloon Tracker</h3>
                                <div className="flex gap-2">
                                    <Link target='_blank' href="https://windborne-challenge-yt1c.onrender.com/" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View Website →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}

import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const PROJECTS_DATA = {
    website: [
        { name: 'The Mind of Ramanujan', url: 'https://legacy1729.com/' },
        { name: 'Best Direct Finance', url: 'https://bestdirectfinance.co.uk/' },
        { name: 'My New Version LLC', url: 'https://mynewversionllc.com/' },
        { name: 'Tekstag', url: 'https://tekstag.com/' },
        { name: 'Transformer Shop', url: 'https://transformershop.org/' },
        { name: 'Raffles Global DL', url: 'https://rafflesglobaldl.com/' },
        { name: 'Nimai Engineering', url: 'https://nimaiengineering.com/' },
        { name: 'BEM Offshore', url: 'https://bemoffshore.com/' },
        { name: 'GRA Success', url: 'https://grasuccess.com/' },
        { name: 'Partim', url: 'https://partim.in/' },
        { name: 'Aram Textiles', url: 'https://aramtextiles.com/' }
    ],
    webApp: [
        { name: 'Movwise', url: 'https://movwise.com/' },
        { name: 'Ezsharez', url: 'https://ezsharez.com/' }
    ],
    mobileApp: {
        reference: 'https://hi5technet.com/upskill.html',
        android: [
            { name: 'ELIM(WELLINGTON)', url: 'https://play.google.com/store/apps/details?id=dev.rcloud.elimwellington.twa' },
            { name: 'ELIM(HAMILTON)', url: 'https://play.google.com/store/apps/details?id=app.web.elim_hamilton.twa' },
            { name: 'JAYANATHANCHITS', url: 'https://play.google.com/store/apps/details?id=com.sjctc.chitfunds' },
            { name: 'YOURFARMPARTNER', url: 'https://play.google.com/store/apps/details?id=com.yfpartner' }
        ],
        ios: [
            { name: 'ELIM(WELLINGTON)', url: 'https://apps.apple.com/in/app/elim-wellington/id1594577377' },
            { name: 'ELIM(HAMILTON)', url: 'https://apps.apple.com/in/app/elim-hamilton/id6472696171' },
            { name: 'JAYANATHANCHITS', url: 'https://apps.apple.com/in/app/jayanathan-chits-table-cash/id1609172958' }
        ]
    },
    summerCourse: [
        { name: 'Nextgen Flutter', url: '/nextgen.html', altUrl: 'https://youtube.com/shorts/KK7keXXsixk?si=Db926xtI3J6-Bke9' },
        { name: 'Agentic AI', url: '/upskill.html' }
    ]
};

import SubPageHero from '../components/SubPageHero';

const ProjectsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'website' | 'webApp' | 'mobileApp' | 'summerCourse'>('website');

    const tabs = [
        { id: 'website', label: 'Website Projects' },
        { id: 'webApp', label: 'Web Apps' },
        { id: 'mobileApp', label: 'Mobile Apps' },
        { id: 'summerCourse', label: 'Summer Course' }
    ];

    return (
        <div className="pb-20 md:pb-28">
            <SubPageHero 
                page="projects"
                label="Our Portfolio"
                title="Projects & Success Stories"
                description="Explore a selection of our top projects across Web, Mobile, and specialized Summer Courses."
            />
            <div className="container mx-auto px-6 mt-12 md:mt-20">
                {/* Tabs / Segmented Control */}
                <div className="flex justify-center mb-16 max-w-full">
                    <div className="flex overflow-x-auto p-1 bg-[#1A1A2E]/80 backdrop-blur-md rounded-2xl border border-glass-border shadow-2xl max-w-full hide-scrollbar gap-1 whitespace-nowrap">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`relative px-6 py-2.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-[#4ade80] to-[#2dd4bf] text-[#05010f] shadow-lg shadow-[#2dd4bf]/20 scale-105'
                                    : 'text-text-muted hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto">
                {activeTab === 'website' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS_DATA.website.map((item, idx) => (
                            <Card key={idx} className="p-6 flex flex-col items-start justify-between min-h-[160px] group transition-all hover:border-primary-brand">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary-brand font-medium inline-flex items-center group-hover:text-white transition-colors">
                                    Visit Website <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </a>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === 'webApp' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS_DATA.webApp.map((item, idx) => (
                            <Card key={idx} className="p-6 flex flex-col items-start justify-between min-h-[160px] group transition-all hover:border-primary-brand">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary-brand font-medium inline-flex items-center group-hover:text-white transition-colors">
                                    View App <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </a>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === 'mobileApp' && (
                    <div className="space-y-12 text-left">

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-glass-border pb-2">Android Apps</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PROJECTS_DATA.mobileApp.android.map((item, idx) => (
                                    <Card key={idx} className="p-6 group transition-all hover:border-[#3DDC84]">
                                        <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#3DDC84] font-medium inline-flex items-center group-hover:text-white transition-colors">
                                            Get on Google Play <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                        </a>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-glass-border pb-2">iOS Apps</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PROJECTS_DATA.mobileApp.ios.map((item, idx) => (
                                    <Card key={idx} className="p-6 group transition-all hover:border-[#007AFF]">
                                        <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#007AFF] font-medium inline-flex items-center group-hover:text-white transition-colors">
                                            Download on App Store <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                        </a>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'summerCourse' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS_DATA.summerCourse.map((item, idx) => (
                            <Card key={idx} className="p-6 flex flex-col items-start justify-between min-h-[160px] group transition-all hover:border-primary-brand">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                                <div className="flex flex-col space-y-2 mt-4">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary-brand font-medium inline-flex items-center group-hover:text-white transition-colors">
                                        Course Page <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </a>
                                    {item.altUrl && (
                                        <a href={item.altUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm font-medium hover:text-white transition-colors">
                                            Watch Video
                                        </a>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};

export default ProjectsPage;

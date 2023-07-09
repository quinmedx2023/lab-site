import React, {useContext} from 'react';
import {tw} from '@twind/core';
import {LabContext} from '../App';

function Footer() {
    const labContext = useContext(LabContext);
    return (
        <div className={tw`flex-col px-4 pt-8 mx-auto  sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bg-slate-800`}>
            <div className={tw`lg:flex mx-auto`}>
                <img className={tw`w-80`} src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-156eae9527.svg" alt="Johns Hopkins University" />
                <div className={tw`grid gap-4 lg:gap-40 lg:row-gap-6 mb-8 grid-cols-1 lg:grid-cols-3  ml-8`}>
                        <div className={tw`flex items-center mt-4 text-gray-300`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className={tw`ml-4 text-md tracking-wide font-semibold`}>
                                720 Rutland Avenue,<br />Traylor 710 Baltimore,<br />MD 21205
                            </div>
                        </div>
                        <div className={tw`flex items-center text-gray-300`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-10 h-10 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.25 6.75h13.5m-13.5 0v10.5h13.5V6.75m-13.5 0L12 12l6.75-5.25"></path>
                            </svg>
                            <div className={tw`ml-4 text-md tracking-wide font-semibold`}>
                                jhu.bme.bit@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center text-gray-300">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className={tw`ml-4 text-md tracking-wide font-semibold`}>
                                1 (410) 955-0075
                            </div>
                        </div>   
                </div>
            </div>
            <div className={tw`flex flex-col content-end pt-5 pb-10 border-t lg:flex-row`}>
                    <p className={tw`text-sm md:text-sm text-gray-300`}>
                        © Copyright {new Date().getFullYear()} {labContext.name} Inc. All rights reserved.
                    </p>
            </div>
        </div>
    );
}

export default Footer;
import React, {useContext, useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {tw} from '@twind/core';
import {LabContext} from '../App';
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {researches, newsList} from '../data/data.js';

function About() {
    const labContext = useContext(LabContext)
    return (
        <div>
            <div className={tw`flex flex-col items-center`}>
                <img src="https://bit.bme.jhu.edu/img/hometop.png" className={tw`w-3/5`}></img>
                <strong className={tw`mt-4 text-3xl tracking-wide text-gray-900`}>Welcome to the {labContext.name}</strong>
                <p className={tw`indent-8 text-gray-600 text-2xl text-left whitespace-normal tracking-normal leading-relaxed w-3/4`}>
                        Our research focuses on the development of cutting-edge and transformative biophotonics technologies with an ultimate goal of disease detection at early, manageable stages, monitoring 
                    therapeutic effects and treatment outcomes, and guiding interventions. Follow the links in <NavLink className="underline italic text-blue-600" to="/Research">Research</NavLink> to learn 
                    more or contact us for further information.
                </p>
            </div>

            <div className={tw`flex`}>
                <div className={tw`flex ml-20 mt-10 w-1/2`}>
                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        >
                        {
                            researches.map((research,index) => {
                            return (
                                <SwiperSlide key={index}>
                                <div className={tw`grid grid-col-1 ml-40 w-7/12`}>
                                    <img src={research.image}/>
                                    <ReactMarkdown className={tw`indent-8 text-[18px]`}>Hear about our research: Dr. Li will deliver an invited talk at iNOW2023 on ”Probing the Brain Using Low-coherence Light” in Wuerzburg, Germany.</ReactMarkdown>
                                </div>
                                </SwiperSlide>
                            );
                            })
                        }
                    </Swiper>
                </div>
                
                <div className={tw`container md:px-6 mt-2`}>
                    <section className={tw`text-center md:text-left`}>
                        <h2 className={tw`mb-2 text-xl font-bold`}>Latest News</h2>
                        {
                            newsList.slice(0,4).map((news, index) => {
                                return (
                                    <div className={tw`mb-2 flex flex-wrap w-3/5`} key={index}>
                                        <div className={tw`mb-2 mr-auto basis-auto px-3 md:mb-0`}>
                                            <small className={tw`font-bold`}>{news.date.toISOString().slice(0, 10)}    </small>
                                            <span className={tw`text-neutral-500 dark:text-neutral-300`}>
                                                {news.content}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        }     
                        <NavLink to="/news" className={tw`text-sm font-medium italic text-center text-blue-600 underline`}>
                            Read More
                        </NavLink>        
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
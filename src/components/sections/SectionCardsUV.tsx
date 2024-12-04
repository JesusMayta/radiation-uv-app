import { textFont } from '@/config/fonts';
import { InfoCards } from '@/utils';
import React from 'react'
import { LuShield, LuWaves } from 'react-icons/lu';
import { PiLightningFill } from 'react-icons/pi';

export const SectionCardsUV = () => {
    return (
        <>
            <h3 className={`${textFont.className} text-4xl text-textColor mb-28 font-semibold`}>Tipos de radiación UV</h3>
            <div className="container px-5 mx-auto text-textColor">
                <div className="flex flex-wrap -m-4">
                    {InfoCards.map((card) => (
                        <div key={card.id} className="p-4 lg:w-1/3" data-aos={card.aos}>
                            <div className="h-full flex flex-col justify-center space-y-6 py-16 bg-secondary border-4 border-white px-8 rounded-lg overflow-hidden text-start relative">
                                <card.icon className={card.iconClassName} />
                                <h2 className={`${textFont.className} text-white font-bold text-2xl`}>{card.type}</h2>
                                <p className={`${textFont.className} text-justify`}>{card.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

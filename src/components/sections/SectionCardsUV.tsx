import { textFont } from '@/config/fonts';
import React from 'react'
import { LuShield, LuWaves } from 'react-icons/lu';
import { PiLightningFill } from 'react-icons/pi';

export const SectionCardsUV = () => {
    return (
        <section className="w-full px-16 my-32">
            <h3 className={`${textFont.className} text-4xl text-textColor mb-28 font-semibold`}>Tipos de radiación UV</h3>
            <div className="container px-5  mx-auto text-textColor">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full flex flex-col justify-center space-y-6 py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-black px-8 rounded-lg overflow-hidden text-start relative">
                            <LuWaves className="text-4xl text-blue-500" />
                            <h2 className={`${textFont.className} text-white font-bold text-2xl`}>UVA</h2>
                            <p className={`${textFont.className} text-justify`}>La radiación ultravioleta A (UVA) de onda larga penetra profundamente en la piel y es responsable del envejecimiento prematuro.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full flex flex-col justify-center space-y-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black px-8 rounded-lg overflow-hidden text-start relative">
                            <PiLightningFill className="text-4xl text-red-600" />
                            <h2 className={`${textFont.className} text-white font-bold text-2xl`}>UVB</h2>
                            <p className={`${textFont.className} text-justify`}>La radiación ultravioleta B (UVB) de onda media daña las capas superficiales de la piel y es la principal causa de quemaduras solares.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full flex flex-col justify-center space-y-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black px-8 rounded-lg overflow-hidden text-start relative">
                            <LuShield className="text-4xl text-green-600" />
                            <h2 className={`${textFont.className} text-white font-bold text-2xl`}>UVC</h2>
                            <p className={`${textFont.className} text-justify`}>La radiación ultravioleta tipo C (UVC) es una forma de energía invisible que proviene del sol y es la más dañina de los rayos ultravioleta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

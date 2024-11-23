'use client';

import { textFont } from '@/config/fonts';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import { tailChase } from 'ldrs'

const currentDate = format(new Date(), 'dd/MM/yyyy', { locale: es });

export const IndexUvValue = () => {

    tailChase.register()
    const [showLoading, setShowLoading] = useState<boolean>(false);

    const handleGetIndexUv = () => {
        setShowLoading(true);
    };

    return (
        <div className="h-96 w-4/5 mx-auto lg:mx-0 lg:w-1/2 backdrop-blur-sm bg-white/85 border-2 border-black rounded-3xl">
            <div className="w-full h-full flex flex-col justify-between p-4">
                <div className="flex items-baseline gap-2">
                    <p className={`${textFont.className} font-light`}>La fecha de hoy es: </p>
                    <p className={`${textFont.className} font-medium`}>{currentDate}</p>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between h-full w-full">
                        {showLoading ? (
                            <div className="self-center">
                                <l-tail-chase
                                    size="40"
                                    speed="1.75"
                                    color="black"
                                ></l-tail-chase>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={handleGetIndexUv}
                                className="bg-primary border border-black hover:shadow-2xl hover:ring-8 hover:ring-secondary hover:ring-opacity-20 duration-300 hover:shadow-primary rounded-full h-40 w-40">
                                <p className={`${textFont.className} text-white font-semibold`}>Ver índice UV</p>
                            </button>
                        )}
                        <ol>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                        </ol>
                    </div>
                </div>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam ab reiciendis odit dignissimos placeat. Suscipit in ipsam sapiente earum? Delectus odio eius totam suscipit quisquam quae ullam temporibus dolorem?AOS
                </p>
            </div >
            <button className="">

            </button>
        </div >
    );
};

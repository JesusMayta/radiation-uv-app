'use client';

import { getIndexUv } from '@/actions/indexUv/getIndexUv';
import { textFont } from '@/config/fonts';
import { useIndexUvStore } from '@/store';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import { IoWaterOutline } from 'react-icons/io5';
import { LuClock4, LuCloudSun, LuSun } from "react-icons/lu";
import { TfiReload } from 'react-icons/tfi';

const currentDate = format(new Date(), 'dd/MM/yyyy', { locale: es });

interface Props {
    indexValue: number;
};

export const IndexUvValue = ({ indexValue }: Props) => {

    const { indexUvInStore, saveIndexUv } = useIndexUvStore();

    const handleGetIndexUv = async () => {
        const data = await getIndexUv();
        saveIndexUv(data as number);
    };

    return (
        <div className="h-fit w-4/5 py-10 mx-auto lg:mx-0 lg:w-1/2 backdrop-blur-lg bg-white/85 border-2 border-black rounded-3xl relative">
            <Image src="/assets/index-image-logo-1.png" width={1000} height={1000} alt='sun-and-earth-image' className="absolute right-40 inset-y-0 blur-sm opacity-25 h-full w-[60%] -z-20" priority />
            <div className="w-full px-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className={`${textFont.className} font-semibold text-3xl`}>Índice UV</h2>
                        <p>{currentDate}</p>
                    </div>
                    <LuSun className="text-primary w-8 h-8 animate-pulse" />
                </div>

                <div className="mt-5 flex justify-between items-center">
                    <p className={`${textFont.className} font-semibold text-7xl`}>{indexUvInStore || indexValue}</p>
                    <p className={`${textFont.className} font-semibold text-gray-500`}>Alto</p>
                </div>

                <div className="w-full">
                    <progress className="progress progress-primary w-full transition-all duration-300" value={`${indexUvInStore || indexValue}`} max="20"></progress>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mt-5">
                    <div className="flex items-center space-x-2">
                        <LuClock4 className="w-5 h-5 text-primary" />
                        <span>Mayor intensidad: 10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IoWaterOutline className="w-5 h-5 text-primary" />
                        <span>Reflejo: Agua 100%, Arena 15%, Nieve 80%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <LuCloudSun className="w-5 h-5 text-primary" />
                        <span>Nubes reducen UV parcialmente</span>
                    </div>
                </div>
                <div className="w-full mt-3">
                    <button
                        onClick={handleGetIndexUv}
                        className="bg-primary rounded-lg py-1.5 text-white w-full flex justify-center items-center gap-2 shadow-lg shadow-secondary">
                        <TfiReload className="w-5 h-5" />
                        <p className={`${textFont.className} font-semibold`}>Actualizar indice UV</p>
                    </button>
                </div>
            </div>
        </div >
    );
};

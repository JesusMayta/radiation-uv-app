'use client';

import { textFont } from '@/config/fonts';
import { fototypeOptions, fototypeData } from '@/utils';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const FototypeSkin = () => {


    return (
        <div className="w-1/2 flex justify-center">
            <div className="w-4/5 rounded-3xl border-2 border-black bg-white/95 p-5 animate-fade-right animate-duration-[2000ms] relative overflow-hidden">
                <div className="absolute w-32 h-32 bg-primary shadow-xl shadow-primary rounded-full -bottom-7 -left-10" />
                <div className="absolute w-10 h-10 bg-secondary rounded-full bottom-32 left-4 shadow-xl shadow-secondary" />
                <div className="absolute w-10 h-10 bg-secondary rounded-full bottom-16 left-24 shadow-xl shadow-secondary" />
                <h3 className={`${textFont.className} font-semibold text-2xl`}>Fototipos de piel</h3>
                <div className="w-full flex justify-center mt-4">
                    <div className="w-72 h-72">
                        <Pie data={fototypeData} options={fototypeOptions} />
                    </div>

                </div>
            </div>
        </div>
    );
};

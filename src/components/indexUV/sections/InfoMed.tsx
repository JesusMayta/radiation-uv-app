'use client';

import { IndexValueOptions, indexValues } from '@/utils';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, } from 'chart.js';
import { textFont } from '@/config/fonts';

import { subDays, format } from 'date-fns';
import { es } from 'date-fns/locale';

const yesterdayDate = format(subDays(new Date(), 1), "d 'de' MMMM 'de' yyyy", { locale: es });

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const InfoMed = () => {

    return (
        <div className="w-1/2 flex justify-center items-center">
            <div className="w-11/12 h-fit backdrop-blur-sm bg-white/90 rounded-3xl border-2 border-black px-8 py-5 animate-fade-left animate-duration-[2500ms]">

                <div className="flex justify-between items-baseline">
                    <h3 className={`${textFont.className} font-semibold text-2xl`}>Radiación UV</h3>
                    <span className={`${textFont.className} text-sm`}>{yesterdayDate}</span>
                </div>
                <div className="mt-5">
                    <Line data={indexValues} options={IndexValueOptions} />
                </div>
            </div>
        </div>
    )
}

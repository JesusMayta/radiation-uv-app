import { textFont } from '@/config/fonts';
import { indexInfo } from '@/utils';
import Image from 'next/image';

export const CardsIndexUv = () => {
    return (
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-8 items-center relative">
            <Image src="/assets/index-image-logo.png" width={1000} height={1000} alt='boy-and-sun-image' className="absolute" priority />
            {indexInfo.map((indexUv, index) => (
                <div key={indexUv.name} className={`h-36 w-1/3 backdrop-blur-sm animate-fade-left animate-duration-[${index}000ms] bg-white/90 rounded-3xl flex flex-col justify-center items-center border-2 border-black`}>
                    <p className={`${textFont.className} font-semibold text-4xl bg-gradient-to-l ${indexUv.color} bg-clip-text text-transparent`}>{indexUv.number}</p>
                    <p className={`${textFont.className} font-semibold`}>{indexUv.name}</p>
                    <p className={`${textFont.className} font-normal text-gray-500`}>{indexUv.type}</p>
                </div>
            ))}
        </div>
    );
};
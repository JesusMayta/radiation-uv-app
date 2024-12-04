import { textFont } from '@/config/fonts';
import Image from 'next/image';

export const InfoSection = () => {
    return (
        <>
            <h3 className={`${textFont.className} text-4xl text-textColor mb-28 font-semibold`}>¿Qué es la radiación UV?</h3>
            <div className="flex flex-row-reverse text-white">
                <div className="w-1/2 flex flex-col items-center space-y-8" data-aos="zoom-out-left">
                    <p className={`${textFont.className} text-justify`}>
                        La radiación UV (100-400 nm) proviene del sol y fuentes artificiales. Se divide en tres tipos: UVA, UVB y UVC. La atmósfera bloquea casi toda la radiación UVC y la mayoría de la UVB, dejando principalmente UVA en la superficie terrestre. La exposición a más rayos UV, debido a la reducción del ozono, puede causar problemas de salud como cáncer de piel y cataratas, y afecta también a animales y plantas (OMS).
                    </p>
                    <ul className="space-y-4 text-sm">
                        <li className="">Los cánceres de piel son causados principalmente por la exposición a la radiación ultravioleta (UVR), ya sea del sol o de fuentes artificiales.</li>
                        <li>A nivel mundial, en 2020, se diagnosticaron más de 1,5 millones de casos de cáncer de piel y se informaron más de 120 000 muertes asociadas con el cáncer de piel.</li>
                        <li>En todo el mundo, se estima que 15 millones de personas son ciegas debido a las cataratas; de ellas, alrededor del 10% puede deberse a la exposición a la UVR.</li>
                        <li>La exposición excesiva al sol en niños y adolescentes contribuye al cáncer de piel en la edad adulta.</li>
                        <li>Hay disponibles medidas de prevención simples y efectivas. Se recomienda la protección solar cuando el índice ultravioleta es 3 y superior.</li>
                    </ul>
                </div>
                <figure className="w-1/2 flex justify-center" data-aos="fade-right">
                    <Image src="/assets/radiationUV.png" width={400} height={400} alt='sun-image' className="hover:scale-110 duration-700" priority={false} />
                </figure>
            </div>
        </>
    );
};

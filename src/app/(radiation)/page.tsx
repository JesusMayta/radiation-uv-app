import { SectionCardsUV } from '@/components';
import { textFont } from '@/config/fonts';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
    title: 'UV Safe ☀️',
    description: 'Página principal de UV safe',
};

export default function RadiationPage() {
    return (
        <>
            <div className="flex flex-row w-full items-center h-dvh">
                <div className="w-1/2 flex flex-col justify-center text-textColor ps-16 animate-fade-right animate-duration-[2000ms]">
                    <h1 className={`${textFont.className} text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent`}>Bienvenido a UV Safe</h1>
                    <h2 className={`${textFont.className} mt-4 text-2xl`}>Monitorea el índice UV en tiempo real y protege tu piel de manera inteligente.</h2>
                    <p className={`${textFont.className}  mt-3 leading-relaxed text-justify`}>Recibe recomendaciones personalizadas de exposición solar basadas en tu tipo de piel, FPS y otros factores. UV Safe utiliza inteligencia artificial para ayudarte a proteger tu piel de manera inteligente y segura.</p>

                    <div className="mt-12 space-x-8">
                        <Link href="#" className="bg-primary py-3 px-6 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-secondary duration-300">
                            Ver indice UV
                        </Link>
                        <button className="bg-white text-primary py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-gray-400 duration-300">Ver tips de protección</button>
                    </div>
                </div>
                <figure className="w-1/2 flex justify-center animate-fade-left animate-duration-[2000ms]">
                    <Image src="/assets/indexImage.png" width={600} height={600} alt='sun-image' className="hover:scale-110 duration-700" priority />
                </figure>
            </div>

            <section className="w-full px-16 ">
                <h3 className={`${textFont.className} text-4xl text-textColor mt-20 mb-28 font-semibold`}>¿Qué es la radiación UV?</h3>
                <div className="flex flex-row-reverse text-white">
                    <div className="w-1/2 flex flex-col items-center space-y-12">
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
                    <figure className="w-1/2 flex justify-center">
                        <Image src="/assets/radiationUV.png" width={400} height={400} alt='sun-image' className="hover:scale-110 duration-700" priority={false} />
                    </figure>
                </div>
            </section>

            <SectionCardsUV />
        </>
    );
}
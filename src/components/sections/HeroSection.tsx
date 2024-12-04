import { textFont } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';


export const HeroSection = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full items-center h-dvh">
            <div className="w-full sm:w-1/2 mt-32 sm:mt-0 flex flex-col justify-center text-textColor px-4 sm:px-0 sm:ps-16 animate-fade-right animate-duration-[2000ms]">
                <h1 className={`${textFont.className} text-5xl sm:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent`}>Bienvenido a UV Safe</h1>
                <h2 className={`${textFont.className} mt-4 text-lg sm:text-2xl`}>Monitorea el índice UV en tiempo real y protege tu piel de manera inteligente.</h2>
                <p className={`${textFont.className}  mt-3 text-xs sm:text-base leading-relaxed text-justify`}>Mantente informado y protegido del sol con nuestra herramienta interactiva que te ayuda a monitorear el índice UV en tiempo real y recibir recomendaciones personalizadas según tu tipo de piel.</p>
                <div className="mt-12 space-x-4 sm:space-x-8 flex">
                    <Link href="/indexUV" className="bg-primary py-2 sm:py-3 px-3 sm:px-6 rounded-lg text-white font-bold hover:shadow-xl hover:shadow-primary/60 duration-300">
                        Ver indice UV
                    </Link>
                    <button className="bg-white text-primary py-2 sm:py-3 px-3 sm:px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-gray-400 duration-300">Ver tips de protección</button>
                </div>
            </div>
            <figure className="w-full sm:w-1/2 flex justify-center animate-fade-left animate-duration-[2000ms] mt-16 sm:mt-0">
                <Image src="/assets/indexImage.png" width={700} height={700} alt='sun-image' className="hover:scale-110 duration-700" priority />
            </figure>
        </div>
    );
};

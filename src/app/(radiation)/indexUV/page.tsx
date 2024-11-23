import { Metadata } from 'next';
import Image from 'next/image';
import { CardsIndexUv, IndexUvValue } from '@/components';

export const metadata: Metadata = {
    title: 'Calcula tu exposición solar ☀️',
    description: 'Exposición solar',
};

export default function IndexUvPage() {

    return (
        <div className="w-full px-6 xl:px-0 xl:w-11/12 2xl:w-5/6 mx-auto mt-44 mb-32 ">
            <section className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 relative">
                <div className="flex flex-col lg:flex-row -top-32 xl:-top-48 w-full absolute -z-10">
                    <Image src="/assets/index-image-logo-1.png" width={1000} height={1000} alt='sun-and-earth-image' className="hidden lg:block  lg:w-1/2" priority />
                    <Image src="/assets/index-image-logo.png" width={1000} height={1000} alt='boy-and-sun-image' className="w-full lg:w-1/2" priority />
                </div>
                <IndexUvValue />
                <CardsIndexUv />
            </section>
        </div>
    );
}
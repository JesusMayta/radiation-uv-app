import { InfoSection, SectionCardsUV } from '@/components';
import { textFont } from '@/config/fonts';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '../../components/sections/HeroSection';


export const metadata: Metadata = {
    title: 'UV Safe ☀️',
    description: 'Página principal de UV safe',
};

export default function RadiationPage() {
    return (
        <>
            <section>
                <HeroSection />
            </section>

            <section className="w-full px-16">
                <InfoSection />
            </section>

            <section className="w-full px-16 my-32">
                <SectionCardsUV />
            </section>
        </>
    );
}
'use client';

import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

export const AOSProvider = ({ children }: { children: React.ReactNode; }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 300,
            once: false,
        });
    }, []);

    return (
        <>
            {children}
        </>
    );
};
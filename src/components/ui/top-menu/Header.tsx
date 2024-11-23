'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUiStore } from '@/store';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun } from "react-icons/fa";
import { MobileHeader } from './MobileHeader';
import clsx from 'clsx';
import '../../../assets/styles/ui.css';
import { navigationLinks } from '@/utils';
import { usePathname } from 'next/navigation';

export const Header = () => {

    const pathname = usePathname();
    const { openSideMenu } = useUiStore();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={clsx('header', {
                'bg-secondary shadow-2xl shadow-primary': isScrolled
            })}
        >
            <nav className="nav">
                <div className="flex lg:flex-1">
                    <Link href="/" className="logo-link">
                        <FaSun className={clsx('text-4xl lg:text-5xl text-accent transition-all duration-700', {
                            'rotate-45': isScrolled,
                            '-rotate-45': !isScrolled
                        })} />
                        <span className="text-lg font-bold">UV Safe</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={openSideMenu}
                        className="button-mobile"
                    >
                        <GiHamburgerMenu className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigationLinks.map((link) => (
                        <Link href={link.href} key={link.name} className={clsx('leading-6 group relative inline-block', {
                            'hidden': (pathname.split('/')[1] === link.href)
                        })}>
                            <span className={clsx('text-sm font-semibold', {
                                'font-bold': isScrolled
                            })}>
                                {link.name}
                            </span>
                            <div className={clsx('animation-line', {
                                'bg-primary': isScrolled,
                                'from-primary via-secondary to-transparent': !isScrolled
                            })} />
                        </Link>
                    ))}
                </div>
            </nav>

            {/*Mobile */}
            <MobileHeader />
        </header >
    );
};

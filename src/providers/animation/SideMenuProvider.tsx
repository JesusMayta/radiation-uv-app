'use client';

import { useUiStore } from '@/store';
import clsx from 'clsx';

export const SideMenuProvider = () => {

    const { isSideMenuOpen } = useUiStore();

    return (
        <div className={clsx('absolute inset-0 lg:bg-transparent transition-all duration-300', {
            'bg-black/50 z-30': isSideMenuOpen
        })} />
    );
};

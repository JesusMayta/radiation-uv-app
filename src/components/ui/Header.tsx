'use client'

import { Dialog, DialogPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { IoBarbell, IoClose } from 'react-icons/io5';
import { FaSun } from "react-icons/fa";
import Link from 'next/link';

const navigation = [
    { name: 'Consejos de salud', href: '#' },
    { name: 'Calculadora de Exposición Solar', href: 'indexUV' },
    { name: 'Más información', href: '#' },
    { name: 'Contacto', href: '#' },
];

export const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    const [scroll, setscroll] = useState<number>(0);

    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoaded(true);
        console.log('dasdasdas');
        window.addEventListener('scroll', () => setscroll(window.scrollY));
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 text-textColor">
            <nav className={`flex items-center justify-between ${(scroll > 0) ? 'bg-red-700' : ''} p-6 lg:px-20`}>
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
                        <FaSun className="text-4xl text-accent" />
                        <span className="text-lg font-bold">UV Safe</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <IoBarbell aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link href={item.href} key={item.name} className="text-sm font-semibold leading-6 ">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            /> */}
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <IoClose aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

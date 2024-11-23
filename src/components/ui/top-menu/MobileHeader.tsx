import { useUiStore } from '@/store';
import { navigationLinks } from '@/utils';
import { Dialog, DialogPanel } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';

export const MobileHeader = () => {

    const { isSideMenuOpen, closeSideMenu } = useUiStore();

    return (
        <Dialog open={isSideMenuOpen} onClose={closeSideMenu} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto shadow-2xl shadow-primary bg-secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <h2 className="-m-1.5 p-1.5">
                        Your Company
                    </h2>
                    <button
                        type="button"
                        onClick={closeSideMenu}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <IoClose aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigationLinks.map((item) => (
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
        </Dialog >
    )
}

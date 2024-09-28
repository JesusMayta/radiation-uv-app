import { FaSun } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="text-textColor border-t border-accent">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <FaSun className="text-4xl text-accent" />
                        <span className="ml-3 text-xl">UV Safe</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-400">

                        </a>
                        <a className="ml-3 text-gray-400">

                        </a>
                        <a className="ml-3 text-gray-400">

                        </a>
                        <a className="ml-3 text-gray-400">

                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

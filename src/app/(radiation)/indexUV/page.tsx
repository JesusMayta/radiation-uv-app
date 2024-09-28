import { textFont } from '@/config/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Calcula tu exposición solar ☀️',
    description: 'Exposición solar',
};

export default function NamePage() {
    return (
        <div className="h-fit mt-32 overflow-y-auto">

            <div className="flex flex-row h-full">

                <div className="w-1/2">
                    <div className="h-full mx-8 pb-2 pt-4">
                        <h1 className={`${textFont.className} text-center text-5xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold`}>Indice UV hoy</h1>

                        <div className="flex flex-row items-center mt-10">
                            <div className="w-1/2 bg-gradient-to-b from-gray-950 to-black rounded-3xl py-16 mx-12">
                                <p className={`text-8xl text-center text-white font-medium ${textFont.className}`}>5</p>
                            </div>

                            <div className="flex flex-col items-center w-1/2 space-y-4 py-4">
                                <h3 className={`${textFont.className} text-xl text-white font-semibold mb-8`}>Nivel de radiación UV</h3>
                                <div className="flex items-center gap-16">
                                    <span className={`${textFont.className} text-white font-semibold`}>Baja</span>
                                    <div className="bg-green-600 rounded-full h-20 w-20" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className={`${textFont.className} text-white font-semibold`}>Moderada</span>
                                    <div className="bg-yellow-400 rounded-full h-20 w-20 shadow-xl shadow-yellow-600 animate-pulse duration-75" />
                                </div>

                                <div className="flex items-center gap-16">
                                    <span className={`${textFont.className} text-white font-semibold`}>Alta</span>
                                    <div className="bg-orange-500 rounded-full h-20 w-20" />
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className={`${textFont.className} text-white font-semibold`}>Muy alta</span>
                                    <div className="bg-red-700 rounded-full h-20 w-20" />
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className={`${textFont.className} text-white font-semibold`}>Extremo</span>
                                    <div className="bg-purple-800 rounded-full h-20 w-20" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-12 flex flex-col items-center justify-center">
                    <h2 className={`${textFont.className} bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-center font-bold text-5xl`}>¿Qué es el índice UV?</h2>
                    <p className={`${textFont.className} text-white leading-6 text-justify mt-10`}>
                        El Índice de Radiación Ultravioleta (UVI) mide el nivel de radiación UV. Su valor aumenta de cero hacia arriba, indicando un mayor riesgo de daño a la piel y los ojos con el tiempo de exposición. El UVI es fundamental para alertar sobre la necesidad de protección solar. Un incremento en los casos de cáncer de piel, especialmente en personas con piel clara, se asocia con la exposición excesiva a la radiación UV del sol y fuentes artificiales como las tumbonas. La OMS y otras organizaciones desarrollaron el UVI para concienciar sobre los riesgos de la exposición solar y fomentar medidas de protección, lo que podría reducir efectos nocivos para la salud y los costos de atención médica (OMS).
                    </p>
                </div>

            </div>

            <div className="mt-16 ps-16 pb-12">
                <h3 className={`${textFont.className} text-textColor text-xl underline`}>Ingrese sus datos para recomendaciones personalizadas</h3>
                <form action="" className="py-10">
                    <div className="flex flex-row w-full px-32 gap-x-10">
                        <div className="mt-8 flex flex-col w-1/2">
                            <label htmlFor="" className="text-white mb-4 font-semibold">Indique su tipo de piel:</label>
                            <input type="text" placeholder='ej: Clara' className="rounded-lg py-2 px-3 text-white bg-black border border-white focus:border-primary outline-none transition-colors" />
                        </div>

                        <div className="mt-8 flex flex-col w-1/2">
                            <label htmlFor="" className="text-white mb-4 font-semibold">Ingrese su factor de protección solar:</label>
                            <input type="text" placeholder='ej: 30' className="rounded-lg py-2 px-3 text-white bg-black border border-white focus:border-primary outline-none transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-row items-end w-full px-32 gap-x-10">
                        <div className="mt-8 flex flex-col w-1/2">
                            <label htmlFor="" className="text-white mb-4 font-semibold">Indique su edad:</label>
                            <input type="text" placeholder='ej: 20' className="rounded-lg py-2 px-3 text-white bg-black border border-white focus:border-primary outline-none transition-colors" />
                        </div>

                        <button className="bg-gradient-to-r from-primary to-secondary py-2 rounded-md text-accent font-semibold shadow-lg hover:shadow-secondary w-1/2 duration-300">
                            Obtener recomendación
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}
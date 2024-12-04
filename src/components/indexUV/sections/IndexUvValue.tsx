'use client';

import { getIndexUv } from '@/actions/indexUv/getIndexUv';
import { textFont } from '@/config/fonts';
import { useIndexUvStore } from '@/store';
import { fototypesInputs } from '@/utils';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IoWaterOutline } from 'react-icons/io5';
import { LuClock4, LuCloudSun, LuSun } from "react-icons/lu";
import { TfiReload } from 'react-icons/tfi';

const currentDate = format(new Date(), "d 'de' MMMM 'del' yyyy", { locale: es });

interface Props {
    indexValue: number;
};

export const IndexUvValue = ({ indexValue }: Props) => {

    const [showModalMed, setShowModalMed] = useState<boolean>(false);
    const [isUseSolarProtector, setIsUseSolarProtector] = useState<boolean>(false);
    const [fototype, setFototype] = useState<string>('');
    const [tiempoExposicion, setTiempoExposicion] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(0);
    const [fps, setFps] = useState('');
    const { indexUvInStore, saveIndexUv } = useIndexUvStore();

    const handleGetIndexUv = async () => {
        const data = await getIndexUv();
        saveIndexUv(data as number);
    };

    const calculateMed = () => {

        const findFototype = fototypesInputs.find((type) => type.label === fototype);

        let tiempo = Math.round(findFototype!.med / ((indexValue / 40)) * 60) // Tiempo en segundos

        if (isUseSolarProtector && fps) {
            tiempo *= parseFloat(fps) // Multiplica el tiempo por el valor de FPS
        }
        setTiempoExposicion(tiempo);
        setTiempoRestante(tiempo);
    };

    const formatTiempo = (segundos: number) => {
        const horas = Math.floor(segundos / 3600)
        const minutos = Math.floor((segundos % 3600) / 60)
        const segundosRestantes = segundos % 60
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`
    }

    const showStringByIndexUv = () => {
        if (indexUvInStore <= 5) return 'Bajo y moderado';
        if (indexUvInStore > 5 && indexUvInStore <= 7) return 'Alto';
        if (indexUvInStore > 7 && indexUvInStore <= 10) return 'Muy alto';
        if (indexUvInStore > 10 && indexUvInStore <= 100) return 'Extremadamente alto'
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFototype(event.target.value);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (tiempoRestante > 0 && showModalMed) {
            timer = setTimeout(() => setTiempoRestante(prev => prev - 1), 1000)
        }
        return () => clearTimeout(timer)
    }, [tiempoRestante, showModalMed])

    return (
        <div className="h-fit w-4/5 py-10 mx-auto lg:mx-0 lg:w-1/2 backdrop-blur-lg bg-white/85 border-2 border-black rounded-3xl relative">
            <Image src="/assets/index-image-logo-1.png" width={1000} height={1000} alt='sun-and-earth-image' className="absolute right-40 inset-y-0 blur-sm opacity-25 h-full w-[60%] -z-20" priority />
            <div className="w-full px-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className={`${textFont.className} font-semibold text-3xl`}>Índice UV</h2>
                        <p className={`${textFont.className} text-sm font-light`}>{currentDate}</p>
                    </div>
                    <LuSun className={clsx('w-8 h-8 animate-pulse', {
                        'text-green-500': indexUvInStore <= 5,
                        'text-orange-500': (indexUvInStore > 5 && indexUvInStore <= 7),
                        'text-red-600': (indexUvInStore > 7 && indexUvInStore <= 10),
                        'text-fuchsia-700': (indexUvInStore > 10 && indexUvInStore <= 100),
                    })} />
                </div>

                <div className="mt-5 flex justify-between items-center">
                    <p className={`${textFont.className} font-semibold text-7xl`}>{indexUvInStore || indexValue}</p>
                    <p className={`${textFont.className} font-semibold text-gray-500`}>{showStringByIndexUv()}</p>
                </div>

                <div className="w-full">
                    <progress className={clsx('progress w-full transition-all duration-300', {
                        'progress-accent ': indexUvInStore <= 5,
                        'progress-warning': (indexUvInStore > 5 && indexUvInStore <= 7),
                        'progress-error': (indexUvInStore > 7 && indexUvInStore <= 10),
                        'progress-secondary': (indexUvInStore > 10 && indexUvInStore <= 100),
                    })} value={`${indexUvInStore || indexValue}`} max="18"></progress>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mt-5">
                    <div className="flex items-center space-x-2">
                        <LuClock4 className="w-5 h-5 text-primary" />
                        <span>Mayor intensidad: 10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IoWaterOutline className="w-5 h-5 text-primary" />
                        <span>Reflejo: Agua 100%, Arena 15%, Nieve 80%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <LuCloudSun className="w-5 h-5 text-primary" />
                        <span>Nubes reducen UV parcialmente</span>
                    </div>
                </div>
                <div className="w-full flex gap-x-12 mt-5">
                    <button
                        onClick={handleGetIndexUv}
                        className="bg-primary rounded-lg py-1.5 text-white w-1/2 flex justify-center items-center gap-2 shadow-lg shadow-secondary">
                        <TfiReload className="w-4 h-4" />
                        <p className={`${textFont.className} font-medium text-sm`}>Actualizar indice UV</p>
                    </button>
                    <button
                        onClick={() => setShowModalMed(true)}
                        className="w-1/2 bg-white rounded-lg border border-secondary cursor-pointer"
                    >
                        <p className={`${textFont.className} text-sm font-medium`}>Calcular tiempo de exposición</p>
                    </button>
                </div>
            </div>

            <Dialog open={showModalMed} as="div" className="relative z-10 focus:outline-none" onClose={() => setShowModalMed(false)}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/70 backdrop-blur-sm">
                    <div className="flex min-h-full items-center justify-center p-4 text-black">
                        <DialogPanel
                            transition
                            className="w-full relative max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <Image src="/assets/sun.png" alt="sun image" width={500} height={500} className="absolute w-32 h-32 z-50 -right-20 -top-16 shadow-lg shadow-primary rounded-full" />
                            <div className="absolute w-10 h-10 bg-blue-900 rounded-full right-14 -top-1 shadow-lg shadow-blue-600" />
                            <div className="absolute w-10 h-10 bg-red-900 rounded-full right-10 -top-28 shadow-lg shadow-red-600" />
                            <DialogTitle as="h3" className={`${textFont.className} text-lg font-semibold`}>
                                Cálculo de tiempo de exposición
                            </DialogTitle>
                            <p className="mt-2 text-sm">
                                Selecciona tu fototipo de piel, si usas protector solar, su FPS para calcular tu tiempo de exposición seguro.
                            </p>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {fototypesInputs.map((type) => (
                                        <div key={type.id} className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text font-semibold">{type.label}</span>
                                                <input type="radio" name="fototype" value={type.label} checked={type.label === fototype} onChange={handleChange} className="radio checked:bg-black" />
                                            </label>
                                        </div>

                                    ))}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="fps" onChange={() => setIsUseSolarProtector(!isUseSolarProtector)} className="toggle toggle-md" />
                                    <label htmlFor="fps" className={`${textFont.className} font-medium text-sm`}>Uso de protector solar</label>
                                </div>
                                {isUseSolarProtector && (
                                    <div className="flex  items-center gap-4 w-full">
                                        <label htmlFor="fps" className={`${textFont.className} font-semibold text-right`}>FPS:</label>
                                        <input type="number" id="fps" name="fps" value={fps} onChange={(e) => setFps(e.target.value)} placeholder="ej:30 ó 50" className="py-2 rounded-lg px-3 border border-gray-500 outline-none w-full" />
                                    </div>
                                )}

                                <div className="mt-2">
                                    <button
                                        type="button"
                                        onClick={calculateMed}
                                        className="bg-primary py-2 text-center w-full rounded-lg border-2 border-black font-semibold text-white">
                                        Calcular tiempo
                                    </button>
                                </div>
                                {tiempoExposicion > 0 && (
                                    <div className="bg-gray-100 p-4 rounded-md">
                                        <h3 className="font-semibold text-lg mb-2">Tiempo de Exposición Seguro(min):</h3>
                                        <div className="text-4xl font-bold text-center text-black">
                                            {formatTiempo(tiempoRestante)}
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2 text-center">
                                            Tiempo restante antes de posible quemadura solar
                                        </p>
                                    </div>
                                )}

                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <FiAlertCircle className="h-8 w-8 text-red-700" />
                                    <p>Recuerda aplicar protector solar cada 2 horas y después de nadar o sudar excesivamente.</p>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div >
    );
};

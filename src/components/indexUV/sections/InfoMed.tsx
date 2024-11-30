'use client';

import { textFont } from '@/config/fonts';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';

export const InfoMed = () => {

    const handleSubmit = () => {
        console.log('sdsadas');
    };

    return (
        <div className="w-1/2 flex justify-center items-center">
            <div className="w-11/12 h-fit backdrop-blur-sm bg-white/90 rounded-3xl border-2 border-black px-8 pt-5 pb-10 animate-fade-left animate-duration-[2500ms] relative">
                {/* <div className="absolute w-32 h-32 rounded-full bg-primary shadow-xl shadow-primary -right-7 -top-20" /> */}
                <Image src="/assets/sun.png" alt="e" width={1000} height={1000} className="absolute w-36 h-36 rounded-full -right-7 -top-20 shadow-sm shadow-secondary hover:scale-110 duration-300" />
                <div className="absolute w-10 h-10 rounded-full bg-secondary shadow-xl shadow-secondary right-24 top-8" />
                <div className="absolute w-10 h-10 rounded-full bg-secondary shadow-xl shadow-secondary right-28 -top-16" />
                <h3 className={`${textFont.className} font-semibold text-2xl`}>Calcula tu tiempo de exposición</h3>
                <p className="mt-2">Ingresa tus datos</p>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors }) => (
                        <Form className="w-full mt-4">
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Tu edad:</label>
                                    <Field
                                        type="number"
                                        name="age"
                                        className="rounded-md border border-black/20 mt-1 py-1 px-4 outline-none"
                                    />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Fototipo de piel:</label>
                                    <Field as="select" name="fototype" className="mt-1 rounded-md border border-black/20 outline-none py-1">
                                        <option value="red">Fototipo 1</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Portector solar (FPS):</label>
                                    <Field
                                        type="number"
                                        name="age"
                                        className="rounded-md border border-black/20 mt-1 py-1 px-4 outline-none"
                                    />
                                </div>

                                <button type="submit" className="w-1/2 bg-primary text-white rounded-lg shadow-xl shadow-primary h-8 mt-6">
                                    Calcular
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

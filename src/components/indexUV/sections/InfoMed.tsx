'use client';

import { textFont } from '@/config/fonts';
import { initialValuesMedForm, medFormValidations } from '@/helpers';
import { fototypesList } from '@/utils';
import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';

export const InfoMed = () => {

    const handleSubmit = (values: any) => {
        console.log(values);
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
                    initialValues={initialValuesMedForm}
                    validationSchema={medFormValidations}
                    onSubmit={handleSubmit}
                >
                    {({ values, touched, errors, handleChange }) => (
                        <Form className="w-full mt-4">
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Nombre completo:</label>
                                    <Field
                                        name="completeName"
                                        id="completeName"
                                        type="text"
                                        className={clsx('rounded-md border border-black/20 mt-1 py-1 px-4 outline-none')}
                                    />
                                    <ErrorMessage name="completeName" component="div" className="text-red-600 text-xs font-semibold" />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Fototipo de piel:</label>
                                    <Field as="select" name="fototype" className="mt-1 rounded-md border border-black/20 outline-none py-1">
                                        {fototypesList.map((fototype) => (
                                            <option key={fototype.id} value={fototype.id}>{fototype.name}</option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="firstName">Tu edad:</label>
                                    <Field
                                        name="age"
                                        id="age"
                                        placeholder="Tu edad"
                                        type="text"
                                        className={clsx('mt-1 rounded-lg border border-black/20 outline-none py-2 px-4', {
                                            'border border-red-500': errors.age
                                        })} />
                                    <ErrorMessage name="age" component="div" className="text-red-600 text-xs font-semibold" />
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

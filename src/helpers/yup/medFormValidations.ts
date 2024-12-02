import * as Yup from 'yup';


export const medFormValidations = Yup.object({
    completeName: Yup.string().required('Su nombre es requerido'),
    age: Yup.string().required('Su edad es requerida'),
    fototype: Yup.number().required('Seleccione su fototipo'),
    fps: Yup.number().required()
});
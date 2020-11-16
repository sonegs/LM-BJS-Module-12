import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        type: [{ // Validamos el campo tipo
            validator: Validators.required, //se usa el metodo importado Validators
            message: 'Campo requerido',
        }, ],
        alias: [{ // Validamos el campo alias
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
    },
};
// se exporta el resultado del metodo importadocreateFormValidation con los valores del objeto validationSchema
export const formValidation = createFormValidation(validationSchema);
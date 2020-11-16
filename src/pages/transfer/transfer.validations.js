import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        name: [{ // Validamos el campo name
            validator: Validators.required, //se usa el metodo importado Validators
            message: 'Campo requerido',
        }, ],
        iban: [{ // Validamos el campo iban
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        amount: [{ // Validamos el campo importe
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        concept: [{ // Validamos el campo concept
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        day: [{ // Validamos el campo day
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        month: [{ // Validamos el campo month
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        year: [{ // Validamos el campo year
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        email: [{ // validamos el campo email
                validator: Validators.required,
                message: 'Email no válido',
            },
            {
                validator: Validators.email,
            }
        ],
    },
};
// se exporta el resultado del metodo importado createFormValidation con los valores del objeto validationSchema
export const formValidation = createFormValidation(validationSchema);
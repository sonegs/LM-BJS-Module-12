import { Validators, createFormValidation } from '@lemoncode/fonk';
import { dayValidator, monthValidator, yearValidator } from './custom-validator';

const validationSchema = {
    field: {
        iban: [{ // validamos el campo IBAN
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Z]\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/ },
                message: 'Introduzca un número IBAN válido',
            }
        ],
        name: [{ // validamos el campo Beneficiario
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/ },
                message: 'Introduzca un nombre válido',
            }
        ],
        amount: [{ // validamos el campo Importe
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[0-9]/ },
                message: 'Introduzca sólo caracteres numéricos',
            }
        ],
        concept: [{ // validamos el campo Concepto
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/ },
                message: 'Introduzca un concepto correcto',
            }
        ],
        day: [{ // validamos el campo day
            validator: dayValidator,
        }],
        month: [{ // Validamos el campo month
            validator: monthValidator,
        }, ],
        year: [{ // Validamos el campo year
            validator: yearValidator,
        }, ],
        email: [{ // validamos el campo email
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            }
        ],
    },
};
// se exporta el resultado del metodo importado createFormValidation con los valores del objeto validationSchema
export const formValidation = createFormValidation(validationSchema);
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

// Se guarda en un objeto llamado login los valores que introduzca el usuario
let login = {
    user: '',
    password: '',
};

// Recoge los datos del campo usuario
//Estos métodos de ayuda se importan de common/helpers
//En concreto, recoge el valor que contenga el input con id "user"
onUpdateField('user', event => {
    const value = event.target.value; // recoge el contenido de id "user" en la constante value
    login = {...login, user: value }; // le damos toda la información que tiene actualmente y se cambia el valor de user por el recogido en el value

    formValidation.validateField('user', login.user).then(result => { //Valida el campo usuario
        onSetError('user', result);
    });
});

// Recoge los datos del campo contraseña
onUpdateField('password', event => {
    const value = event.target.value;
    login = {...login, password: value };

    // Valida el campo constraseña
    formValidation.validateField('password', login.password).then(result => {
        onSetError('password', result);
    });
});

const onNavigate = isValid => { // Si el login es correcto, redirige. Si no, muestra un alert
    isValid ? history.push(routes.accountList) : alert('Usuario y/o contraseña no válidos');
};

onSubmitForm('login-button', () => {
    formValidation.validateForm(login).then(result => { // valida los campos del objeto login
        onSetFormErrors(result); //llama a la funcion onSetFormErrors
        if (result.succeeded) // Si el resultado es correcto
            isValidLogin(login).then(isValid => { // Si se realiza el login correctamente
            onNavigate(isValid);
        });
    });
});
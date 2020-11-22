import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer, getTransfer, updateTransfer } from './transfer.api';
import { history } from '../../core/router';
import { mapTransferVmToApi } from './transfer.mappers';

function callTHeDates() {

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });

}
let transfer = {
    id: '',
    select: 1,
    iban: '',
    name: '',
    amount: '',
    concept: '',
    comments: '',
    day: '',
    month: '',
    year: '',
    email: '',
};

const params = history.getParams();
getTransfer().then(accountList => { onSetValues(setAccountOptions(accountList, params.id)); });

// Se llaman las validaciones

onUpdateField('select-account', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, select: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('select-account', transfer.select).then(result => {
        onSetError('select-account', result);
    });
});

onUpdateField('iban', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, iban: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, name: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, amount: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, concept: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});


onUpdateField('year', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, year: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    callTHeDates();
});


onUpdateField('month', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, month: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    callTHeDates();
});

onUpdateField('day', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, day: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    callTHeDates();
});

onUpdateField('email', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    transfer = {...transfer, email: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});


const validateDate = (day, month, year) => { // Valida la fecha al completo
    const dateObject = new Date();
    const myStringToday = (dateObject.getMonth() - 1) + '/' + dateObject.getDate() + '-' + dateObject.getFullYear();
    const myToday = new Date(myStringToday);

    const myStringDate = month + '-' + day + '-' + year;
    const myDate = new Date(myStringDate);

    return (myDate > myToday) ? true : false;
};

const onSave = () => {
    const apiTransfer = mapTransferVmToApi(transfer);
    return insertTransfer(apiTransfer);
};

onSubmitForm('transfer-button', () => {
    //if (validateDate(transfer.day, transfer.month, transfer.year)) {
    formValidation.validateForm(transfer).then(result => {
        console.log(transfer);
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(() => {
                console.log("todo correcto");
                //history.back();
            });
        }
        console.log("la validacion no ha ido bien");
    });
    //} else { alert("Fecha incorrecta"); }
});
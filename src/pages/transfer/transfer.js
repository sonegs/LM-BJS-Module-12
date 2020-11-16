import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer, getTransfer, updateTransfer } from './transfer.api';
import { history } from '../../core/router';
import { mapAccountVmToApi, mapAccountApiToVm } from '../account/account.mappers';
import { mapTransferVmToApi, mapTransferApiToVm } from './transfer.mappers';
import { getAccountList } from '../account-list/account-list.api';

// tiene que ser más parecido al panel de account


let transfer = {
    ["select-account"]: '',
    iban: '',
    name: '',
    ammount: '',
    concept: '',
    comments: '',
    date: '',
    email: '',
};

const params = history.getParams();
getAccountList().then(accountList => { onSetValues(setAccountOptions(accountList, params.id)); });

// if (isAnAccount) {
//     getTransfer(params.id).then(apiTransfer => {
//         transfer = mapTransferApiToVm(apiTransfer);
//         getAccountList().then(accountList => { onSetValues(setAccountOptions(accountList, params.id)); });
//     });
// } else {

//     getAccountList().then(accountList => { console.log(accountList);
//         onSetValues(setAccountOptions(accountList, params.id)); });
// }

// onUpdateField('name', event => {
//     const value = event.target.value; // recoge el contenido de id "name" en la constante value
//     transfer = {...transfer, user: value }; // le damos toda la información que tiene actualmente y se cambia el valor de name por el recogido en el value
// });

// formValidation.validateField('name', transfer.name).then(result => { //Valida el campo nombre
//     onSetError('name', result);
//     console.log("hola");
// });

const onSave = () => {
    const apiTransfer = mapTransferVmToApi(transfer);
    return insertTransfer(apiTransfer);
};

onSubmitForm('transfer-button', () => {

    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(() => {
                //history.back();
                console.log("todo correcto");
            });
        }
        console.log("la validacion no ha ido bien");
    });
});
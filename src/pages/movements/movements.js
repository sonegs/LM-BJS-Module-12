import { getAccount } from '../account/account.api';
import { onSetValues } from '../../common/helpers';

import { addMovementRows } from './movements.helpers';
import { getMovements } from './movements.api';
import { mapMovementsApiToVm, mapEmptyAccountVmToApi } from './movements.mappers';
import { history } from '../../core/router';
import { mapAccountApiToVm } from '../account/account.mappers';


// Seleccionamos el id para cada una de las cuentas y obtenemos su url
let account = {
    id: '',
    type: '',
    alias: '',
};

const params = history.getParams();
const giveMeDetailsAccount = Boolean(params.id);

// Obtenemos los datos de la cuenta (IBAN y Alias)
if (giveMeDetailsAccount) {
    getAccount(params.id).then(apiAccount => {
        account = mapAccountApiToVm(apiAccount);
        onSetValues(account);
    });
} else {
    account = mapEmptyAccountVmToApi(account);
    onSetValues(account);
}

// Obtenemos los movimientos de esa cuenta
getMovements().then(movements => {
    const vmMovements = mapMovementsApiToVm(movements, params.id); // enviamos todos los movimientos y el id de la cuenta
    if (params.id === undefined) { // Si no hay ninguna cuenta seleccionada, devuelve todos los movimientos
        addMovementRows(movements);
    } else {
        const myMovements = vmMovements => vmMovements.filter(mymoves => mymoves !== undefined); // descartamos los huecos vacios del array
        addMovementRows(myMovements(vmMovements)); // los imprimimos por pantalla
    }
});
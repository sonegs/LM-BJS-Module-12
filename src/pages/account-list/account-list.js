import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListApiToVm } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

// Seleccionamos el id para cada una de las cuentas y obtenemos su url
const setEvents = accountList => {
    accountList.forEach(account => {
        onUpdateField(`select-${account.id}`, event => {
            const route = event.target.value;
            history.push(route);
        });
    });
};


// Imprime las cuentas bancarias, dando formato a la fecha con la api y enlazando las rutas a transferencias y movimientos
getAccountList().then(accountList => {
    const vmAccountList = mapAccountListApiToVm(accountList);
    addAccountRows(vmAccountList);
    setEvents(vmAccountList);
});
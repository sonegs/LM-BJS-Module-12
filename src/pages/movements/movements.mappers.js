export const mapMovementsApiToVm = (movements, accountId) =>
    Array.isArray(movements) ? movements.map(moves => { // recorremos el objeto
        if (moves.accountId == accountId) { return movementsApiToVm(moves); } //devolvemos los movimientos que coinciden con el id de la cuenta
    }) : [];

const movementsApiToVm = (moves) => { // obtenemos los datos de cada movimiento
    return {
        ...moves,
        transaction: new Date(moves.transaction).toLocaleDateString(), //formateamos las fechas
        realTransaction: new Date(moves.realTransaction).toLocaleDateString(),
        amount: `${moves.amount} €`, //añadimos el símbolo del euro en las cantidades
        balance: `${moves.balance} €`,
    };
};

export const mapEmptyAccountVmToApi = account => {
    return {
        ...account,
        alias: 'Total',
        iban: 'Todas las cuentas',
    };
};
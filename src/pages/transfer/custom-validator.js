const todayValidation = 'Day validations';
const today = new Date();

// Valida el día
export const dayValidator = theDay => {
    const { value } = theDay;
    const myValue = parseInt(value);
    const validationDayResult = {
        succeeded: false,
        type: todayValidation,
        message: 'Debe introducir un día válido',
    };

    // obtenemos los valores introducidos de mes y año si los hubiese en ese momento
    const giveMeMonth = document.getElementById('month').value;
    const giveMeYear = document.getElementById('year').value;

    if ((giveMeYear > today.getFullYear()) || (giveMeMonth > (today.getMonth() + 1))) { // controlamos que el mes o el año son superiores a los actuales
        if (myValue <= 31) {
            validationDayResult.succeeded = true;
            validationDayResult.message = '';
        }
    } else if (myValue > today.getDate() && (myValue <= 31)) { // si estamos en el mes actual, comprobamos que el día no es superior al actual
        validationDayResult.succeeded = true;
        validationDayResult.message = '';

    }
    return validationDayResult;
};


export const monthValidator = theMonth => {
    const { value } = theMonth;
    const myValue = parseInt(value);
    const validationMonthResult = {
        succeeded: false,
        type: todayValidation,
        message: 'Debe introducir un mes válido',
    };

    // obtenemos el valor del año
    const giveMeYear = document.getElementById('year').value;
    if (giveMeYear > today.getFullYear()) {
        validationMonthResult.succeeded = true;
        validationMonthResult.message = '';
    } else if (myValue >= (today.getMonth() + 1) && (myValue <= 12)) { // si el año no es posterior, comprobamos que estamos en un mes posterior
        validationMonthResult.succeeded = true;
        validationMonthResult.message = '';
    }
    return validationMonthResult;
};


export const yearValidator = theYear => {
    const { value } = theYear;
    const myYearValue = parseInt(value);
    const validationYearResult = {
        succeeded: false,
        type: todayValidation,
        message: 'Debe introducir un año válido',
    };

    if (myYearValue >= today.getFullYear()) {
        validationYearResult.succeeded = true;
        validationYearResult.message = '';
    }
    return validationYearResult;
}
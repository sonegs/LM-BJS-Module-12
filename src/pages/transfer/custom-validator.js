const todayValidation = 'Day validations';
const today = new Date();

export const dayValidator = theDay => {
    const { value } = theDay;
    const myValue = parseInt(value);
    const validationDayResult = {
        succeeded: false,
        type: todayValidation,
        message: 'Debe introducir un día válido',
    };

    const giveMeMonth = document.getElementById('month').value;
    const giveMeYear = document.getElementById('year').value;

    if ((giveMeYear > today.getFullYear()) || (giveMeMonth > (today.getMonth() + 1))) {
        if (myValue <= 31) {
            console.log("entra");
            validationDayResult.succeeded = true;
            validationDayResult.message = '';
        }
    } else if (myValue > today.getDate() && (myValue <= 31)) {

        console.log("entra");
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

    const giveMeYear = document.getElementById('year').value;
    if (giveMeYear > today.getFullYear()) {
        console.log("entra en mes");
        validationMonthResult.succeeded = true;
        validationMonthResult.message = '';
    } else if (myValue >= (today.getMonth() + 1) && (myValue <= 12)) {
        console.log("entra en mes");
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
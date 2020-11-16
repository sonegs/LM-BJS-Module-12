export const mapAccountVmToApi = account => {
    return {
        ...account,
        name: account.alias,
    }
};

export const mapAccountApiToVm = account => {
    return {
        ...account,
        alias: account.name,
    }
};
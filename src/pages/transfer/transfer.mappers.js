export const mapTransferVmToApi = transfer => {
    return {
        ...transfer,
    };
};

export const mapTransferApiToVm = account => {
    return {
        ["select-account"]: account.name,
    };
};
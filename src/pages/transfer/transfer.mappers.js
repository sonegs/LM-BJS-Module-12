export const mapTransferVmToApi = transfer => {
    return {
        ...transfer,
        name: transfer.alias,
    };
};

export const mapTransferApiToVm = account => {
    return {
        ["select-account"]: account.name,
    };
};
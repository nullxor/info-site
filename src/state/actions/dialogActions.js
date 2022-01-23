function openDialog(id) {
    return { type: 'OPEN_DIALOG', payload: id };
}

function closeDialog(id) {
    return { type: 'CLOSE_DIALOG' };
}

export { openDialog, closeDialog };
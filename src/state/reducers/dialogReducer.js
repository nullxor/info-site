export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

function dialogReducer(state = null, action) {
    switch (action.type) {
        case OPEN_DIALOG:
            return action.payload;
        case CLOSE_DIALOG:
            return null;
        default:
            return state;
    }
}

export default dialogReducer;

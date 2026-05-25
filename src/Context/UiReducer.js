export const initialState = {
    isMenuOpen: true,
    isSectionOpen: false
}

export const UiReducer = (state,action) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {...state, isMenuOpen: !state.isMenuOpen };
        case 'TOGGLE_SECTION':
            return {...state, isMenuOpen: false , isSectionOpen: true };
        case 'CLOSE_ALL':
            return initialState;
        default:
            return state;
    }
}
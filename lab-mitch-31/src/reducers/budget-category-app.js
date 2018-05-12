import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_REMOVE,
} from '../actions/category-actions';

const initialState = {
    categories: []
}

export default function categoryReducer(state, action) {
    if (state === undefined) {
        return initialState
    }
    let newState = {};
    let newCats = [];
switch (actions.type) {
    case CATEGORY_CREATE:

        return Object.assign


        // very end of reducer

    default:
        return state;
    }
}
import {
    BUDGET_CATEGORY_CREATE,
    BUDGET_CATEGORY_UPDATE,
    BUDGET_CATEGORY_REMOVE,
} from '../actions/budget-category-actions.jsx';

import uuidv1 from 'uuid/v1';

console.log('inside budget-category-app')
const initialState = {
    budgetCategories: []
}

export default function budgetcategoryReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }
    let newState = {};
    let currentBudgetCategories;
    let budgetCategoryIndex;

switch (action.type) {
    case BUDGET_CATEGORY_CREATE:
        console.log('inside reducer',action)
        currentBudgetCategories = state.budgetCategories.slice();
        let newBudgetCategories = Object.assign({}, {id: uuidv1(), isEditing: false}, action.categoryPassed);
        currentBudgetCategories.push(newBudgetCategories);
        return Object.assign(newState, state, {budgetCategories: currentBudgetCategories});

    case BUDGET_CATEGORY_UPDATE:
        console.log('BUDGET_CATEGORY_UPDATE - category ', action)
        //console.log('INSIDE BUDGET_CATEGORY_UPDATE, currentBudgetCategories', currentBudgetCategories)
        //console.log('INSIDE BUDGET_CATEGORY_UPDATE, budgetCategory', budgetCategory)
        console.log('state.budget.categories', state.budgetCategories);
        let updateBudgetCategories = state.budgetCategories.map(category => {
            console.log('ID', category.id, action.categoryPassed.id);
            if (category.id === action.categoryPassed.id) {  
                console.log('found a matching ID', category.id, action.categoryPassed.id);              
                category = action.categoryPassed;
                // return category;
               // return action.categoryPassed;
            }
            console.log('updatebudgetcategory', updateBudgetCategories);
            return category
        })
        return Object.assign(newState, state, {budgetCategories: updateBudgetCategories});
        // let budgetCategoryToUpdate = currentBudgetCategories.find(budgetCategory => {
        //     console.log('INSIDE BUDGET_CATEGORY_UPDATE toUpdate', budgetCategoryToUpdate)
        //     return budgetCategory.id === action.id;
        // })
        // budgetCategoryIndex = currentBudgetCategories.indexOf(budgetCategoryToUpdate);
        // console.log('INSIDE BUDGET_CATEGORY_UPDATE', budgetCategoryIndex)
        // currentBudgetCategories[budgetCategoryIndex].isEditing = !currentBudgetCategories[budgetCategoryIndex].isEditing;
        // if (action.category) {
        //     console.log('inside Update action.category', action.category, 'currentbudgetcategories' , currentBudgetCategories)
        //     currentBudgetCategories[budgetCategoryIndex].category = action.category;
        // }
        // if (action.description) {
        //     currentBudgetCategories[budgetCategoryIndex].description = action.description;
        // }
        // if (action.notes) {
        //     currentBudgetCategories[budgetCategoryIndex].notes = action.notes;
        // }
        // if (action.amount) {
        //     currentBudgetCategories[budgetCategoryIndex].amount = action.amount;
        // }
    case BUDGET_CATEGORY_REMOVE:
    console.log('budget category state', state.budgetCategories)
    console.log('Inside BUDGET_CAT', action.id)
        currentBudgetCategories = state.budgetCategories.filter(budgetCategory => budgetCategory.id !== action.id)
        console.log('CURRENT',currentBudgetCategories)
            //return {currentBudgetCategories};
            return Object.assign(newState, state, {budgetCategories: currentBudgetCategories});
     // very end of reducer

    default:
        return state;
    }
}
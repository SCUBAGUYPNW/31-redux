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
    let categoryIindex;

switch (action.type) {
    case BUDGET_CATEGORY_CREATE:
        console.log('inside reducer',action)
        currentBudgetCategories = state.budgetCategories.slice();
        let newBudgetCategories = Object.assign({}, {id: uuidv1(), isEditing: false}, action.categoryPassed);
        currentBudgetCategories.push(newBudgetCategories);
        return Object.assign(newState, state, {budgetCategories: currentBudgetCategories});
    case BUDGET_CATEGORY_UPDATE:
        currentBudgetCategories = state.budgetCategories.slice();
        let budgetCategoryToUpdate = currentBudgetCategories.find(budgetCategory => {
            return budgetCategory.id === action.values.id;
        })
        budgetCategoryIndex = currentBudgetCategories.indexOf(budgetCategoryToUpdate);
        currentBudgetCategories[budgetCategoryIndex].isEditing = !currentBudgetCategories[budgetCategoryIndex].isEditing;
        if (action.values.category) {
            currentBudgetCategories[budgetCategoryIndex].category = action.values.category;
        }
        if (action.values.description) {
            currentBudgetCategories[budgetCategoryIndex].description = action.values.description;
        }
        if (action.values.notes) {
            currentBudgetCategories[budgetCategoryIndex].notes = action.values.notes;
        }
        if (action.values.amount) {
            currentBudgetCategories[budgetCategoryIndex].amount = action.values.amount;
        }
    case BUDGET_CATEGORY_REMOVE:
    console.log('budget category', state)
    console.log(action.id)
        currentBudgetCategories = state.budgetCategories.slice();
        let budgetCategoryToRemove = currentBudgetCategories.find(budgetCategory => {
            return budgetCategory.id === action.id;
        });
        return state.budgetCategories.filter(budgetCategories => {
         return   budgetCategories.id !== action.id;
        }) 
        // very end of reducer

    default:
        return state;
    }
}
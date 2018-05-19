export const BUDGET_CATEGORY_CREATE = 'BUDGET_CATEGORY_CREATE';
export const BUDGET_CATEGORY_UPDATE = 'BUDGET_CATEGORY_UPDATE';
export const BUDGET_CATEGORY_REMOVE = 'BUDGET_CATEGORY_REMOVE';

export function budgetCreate(categoryPassed) {
    console.log('inside Create')
    return {type: BUDGET_CATEGORY_CREATE, categoryPassed};
}

export function budgetUpdate(categoryPassed) {
    return {type: BUDGET_CATEGORY_UPDATE, categoryPassed}
}

export function budgetRemove(id) {
    return {type: BUDGET_CATEGORY_REMOVE, id}
}
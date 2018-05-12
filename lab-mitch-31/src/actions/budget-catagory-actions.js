export const CATAGORY_CREATE = 'CATEGORY_CREATE';
export const CATAGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export fuction create(category) {
    return {type: CATAGORY_CREATE, category};
}

export function update(category) {
    return {type: CATAGORY_UPDATE, category}
}

export function remove(category) {
    return {type: CATEGORY_REMOVE, category}
}
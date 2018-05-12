import react from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import budgetCategoryAppReducer from '../reducers/budget-category-app';
const store = creatStore(budgetCategoryAppReducer, window.__REDUX_DEVTOOLS_EXTENSIONS_ && window.__REDUX_DEVTOOLS_EXTENSIONS__()};
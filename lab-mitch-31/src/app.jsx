import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from './components/dashboard.jsx'
import budgetcategoryReducer from './reducers/budget-category-app.jsx';

console.log('inside app.jsx')
const store = createStore(budgetcategoryReducer);

class App extends React.Component {
    render() {
        console.log('Inside app.jsx App')
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Route exact path='/' component={Dashboard} />
            </BrowserRouter>
            </Provider>
        )
    }
};

export default App;
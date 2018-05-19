import React from 'react'
import {connect} from 'react-redux';

import {
    budgetCreate,
    budgetUpdate,
    budgetRemove,
} from '../actions/budget-category-actions.jsx'; // all actions for the budget tracker.

import BudgetForm from './budget-form.jsx'
import BudgetCategoryList from './budget-list.jsx'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            description: '',
            notes: '',
            amount: 0,
           // reoccuring: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return <div>
            <div>
        <h1>{this.props.appName}</h1>
        <h1>Budget/expense tracker</h1>
        <h2>What do you want to track?</h2>
        </div>
        <BudgetForm name="create"/>
        
        <BudgetCategoryList/>
        </div>     
    }
}

const mapStateToProps = state => ({
    data: state.data,
   // appName: state.appName,
});

 const mapDispatchToProps = (dispatch, getState) => {
     return {
         budgetList: (val) => dispatch(budgetCreate(val)),
         budgetUpdate: (val) => dispatch(budgetUpdate(val)),
         budgetRemove: (id) => dispatch(budgetRemove(id),)
     };
 }

 export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
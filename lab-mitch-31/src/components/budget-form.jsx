import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard.jsx';

import {
    budgetCreate,
    budgetUpdate,
    budgetRemove,
} from '../actions/budget-category-actions.jsx'; // all actions for the budget tracker.

class BudgetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            description: '',
            notes: '',
            amount: 0,
            isEditing: false,
        }
        this.populateForm = this.populateForm.bind(this);
        this.handlecategoryChange = this.handlecategoryChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlecategoryChange(event) {
        let newState = {
            category: event.target.value
        }
        this.setState(newState);
    }

    handleDescriptionChange(event) {
        let newState = {
            description: event.target.value
        }
        this.setState(newState);
    }

    handleNotesChange(event) {
        let newState = {
            notes: event.target.value
        }
        this.setState(newState);
    }

    handleAmountChange(event) {
        let newState = {
            amount: event.target.value
        }
        this.setState(newState);
    }
    populateForm() {
        if (this.props.budgetCategory) {
            let bc = this.props.budgetCategory;
            let category = bc.category; 
            let description = bc.description;
            let notes = bc.note;
            let amount = bc.amount;
            let id = bc.id;

            
           
            let newState = {
                category,
                description,
                notes,
                amount,
                id,
            }
            this.setState(Object.assign(newState, this.state.isEditing))
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this props', this.props);
        let submitFormName = this.props.name;
        if (this.props.name === 'create') {
            this.props.budgetCreate(this.state);
        } else if (this.props.name === 'update') {
            let newValue = Object.assign(this.state, { isEditing: false, id: this.props.id });
            this.props.budgetUpdate(this.state);
            this.props.onClick()
        }
    }

    render() {
        console.log('this.props', this.props);
       // if (this.props.name === 'update')  this.populateForm();
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handlecategoryChange} 
                    type="text" 
                    placeholder="category" 
                    value={this.state.category } 
                    required="true" />
                <input onChange={this.handleDescriptionChange} type="text" placeholder="Description" value={this.state.description} required="true" />
                <input onChange={this.handleNotesChange} type="text" placeholder="Notes" value={this.state.notes} required="true" />
                <input onChange={this.handleAmountChange} type="int" placeholder="0" value={this.state.amount} required="true" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    budgetItems: state.budgetCategories,
});

const mapDispatchToProps = (dispatch, getstate) => {
    return {
        budgetCreate: val => dispatch(budgetCreate(val)),
        budgetUpdate: val => dispatch(budgetUpdate(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
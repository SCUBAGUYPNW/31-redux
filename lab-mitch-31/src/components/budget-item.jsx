import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard.jsx';

import {
    budgetCreate,
    budgetUpdate,
    budgetRemove,
} from '../actions/budget-category-actions.jsx'; // all actions for the budget tracker.

import BudgetForm from './budget-form.jsx';

class BudgetItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleOffEdit = this.toggleOffEdit.bind(this);
    }
toggleEdit(event) {
    let id = event.target.id;
    this.props.budgetcategoryUpdate({isEditing: true, id});
}
toggleOffEdit(event) {
    let id = event.target.id;
    this.props.budgetcategoryUpdate({isEditing: false, id});
}
handleRemove(event) {
    event.preventDefault();
    let id = this.props.id;
    this.props.budgetRemove(id);
}
render() {
    console.log('inside budget item -this.props', this.props);
    if (this.props.isEditing === true) {
    
        return (
            <div>
                <BudgetForm name="update" id={this.props.id}/><button onClick={this.toggleOffEdit} id={this.props.id}>Cancel</button>
            </div>
        )
    }
    return (
        <li id={this.props.id}>
        {this.props.category}: {this.props.description}: {this.props.notes}: {this.props.amount}
        <button id={this.props.id} onClick={this.handleRemove}>REMOVE</button> 
        <button id={this.props.id} onClick={this.toggleEdit}>Edit</button>
        </li>
    )
}

}
const mapStateToProps = state => ({
    budgetCategories: state.budgetCategories,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        budgetRemove: id => dispatch(budgetRemove(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetItem);


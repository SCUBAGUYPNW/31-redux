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
        this.state = {
            isEditing: false,                
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }
toggleEdit(event) {
    this.setState({isEditing: !this.state.isEditing})
}

handleRemove(event) {
    console.log('Inside Handle Remove')
    event.preventDefault();
    let id = this.props.id;
    this.props.budgetRemove(id);
}
render() {
    console.log('inside budget item -this.props', this.props);
    if (this.state.isEditing === true) {
    console.log('budget-item is editing', this.props)
        return (
            <div>
                <BudgetForm name="update" budgetCategory={this.props.budgetCategory} id={this.props.id} onClick={this.toggleEdit}/><button onClick={this.toggleEdit} id={this.props.id}>Cancel</button>
            </div>
        )
    }
    return (
        <li id={this.props.id}>
        {this.props.category}: {this.props.description}: {this.props.notes}: {this.props.amount}
        {' '}
        <button id={this.props.id} onClick={this.handleRemove}>REMOVE</button> 
        {' '}
        <button id={this.props.id} onClick={this.toggleEdit}>EDIT</button>
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
        budgetUpdate: value => dispatch(budgetUpdate(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetItem);


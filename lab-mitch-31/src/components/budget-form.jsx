import React from 'react';
import {connect} from 'react-redux';
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
      this.handlecategoryChange = this.handlecategoryChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleNotesChange = this.handleNotesChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
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

      handleSubmit(event) {
          event.preventDefault();
          console.log('this props', this.props);
          let submitFormName = this.props.name;
          if (this.props.name === 'create') {
                            this.props.budgetCreate(this.state);
          } else if (this.props.name === 'update') {
              let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
              this.props.budgetUpdate(this.state);
          }
      }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
          <input onChange={this.handlecategoryChange} type="text" placeholder="category" required="true"/>
          <input onChange={this.handleDescriptionChange} type="text" placeholder="Description" required="true"/>
          <input onChange={this.handleNotesChange} type="text" placeholder="Notes" required="true"/>
          <input onChange={this.handleAmountChange} type="int" placeholder="0" required="true"/>
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
        categoryUpdate: val => dispatch(budgetUpdate(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetForm);
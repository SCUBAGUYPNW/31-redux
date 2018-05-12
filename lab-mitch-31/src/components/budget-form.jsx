import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard.jsx';

import {
    budgetList,
    budgetUpdate,
    budgetRemove,
} from '../actions/tracker-actions.jsx'; // all actions for the budget tracker.

class BudgetForm extends React.Component {
  constructor(props) {
      super(props)
  }  

  render() {
      return (
          <form onSubmit={this.props.handleSubmit}>
          <input onChange={this.props.handleChange} type="text" placeholder="Catagory" required="true"/>
          <input onChange={this.props.handleChange} type="text" placeholder="Description" required="true"/>
          <input onChange={this.props.handleChange} type="text" placeholder="Notes" required="true"/>
          <input onChange={this.props.handleChange} type="int" placeholder="$" required="true"/>
          </form>
      )
  }
}
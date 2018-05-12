import React from 'react'
import {connect} from 'react-redux';

import {
    budgetList,
    budgetUpdate,
    budgetRemove,
} from '../actions/tracker-actions.jsx' // all actions for the budget tracker.

class Dashboard extends React.Component {
    constuctor(props) {
        super(props);
        this.state = {
            catagory: '',
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
        <budgetForm 
            name="create" 
            handleChange={this.handleChange}>
            </budgetForm>
        
        <budgetList></budgetList>
        </div>     
    }
}

const mapStateToProps = state => ({
    data: state.data,
   // appName: state.appName,
});

 const mapDispatchToProps = (dispatch, getState) => {
     return {
         budgetList: () => dispatch(budgetList()),
         budgetUpdate: values => dispatch(budgetUpdate(values)),
         budgetRemove: id => dispatch(budgetRemove(id),)
     };
 }

 export default Dashboard;
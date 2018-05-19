import React from 'react';
import {connect} from 'react-redux';

import BudgetItem from './budget-item.jsx';

class BudgetCategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.displayAllBudgetCatagories = this.displayAllBudgetCatagories
    }
    
    displayAllBudgetCatagories() {
        // return this.props.budgetCategories.map(budgetCategory => {
        //     console.log(budgetCategory)
        //     return <BudgetItem key={budgetCategory.id} id={budgetCategory.id} category={budgetCategory.category} description={budgetCategory.description} notes={budgetCategory.notes} amount={budgetCategory.amount} isEditing={budgetCategory.isEditing}/>
        // });
    }
render() {
    console.log(this.props)
    return (
        <div>
            <h2>Current Budget Items:</h2>
            <ul>
            {this.props.budgetCategories.map(budgetCategory => 
              <BudgetItem key={budgetCategory.id} id={budgetCategory.id} category={budgetCategory.category} description={budgetCategory.description} notes={budgetCategory.notes} amount={budgetCategory.amount} isEditing={budgetCategory.isEditing}/>
        )
    }
        </ul>
        </div>
    )

}
}

const mapStateToProps = state => ({
    budgetCategories: state.budgetCategories,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        budgetCategoryCreate: val => dispatch(budgetCategoryCreate(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryList);
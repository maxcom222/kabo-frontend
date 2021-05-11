import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import LoadingCircle from '../partials/loading'
import MealPlanSelect from './meal-plan-select'
import { userActions } from '../../actions'

const FreshFood = props => {
  if (!props.user.recipes) return <LoadingCircle />

  const { recipes } = props.user
  const recipeField = recipes.map((food, i) => (
    <Field
      key={i}
      component={MealPlanSelect}
      name={`${food.recipe}_recipe`}
      id={`${food.recipe}_recipe`}
      food={food}
    />
  ))
  return (
    <div className="mr-10">
      <div className="mb-6 text-xl">
        Fresh Food
      </div>
      {recipeField}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user: { subscriptions, dogs }, user } = state
  let dog = dogs.length > 0 ? dogs[0] : {}
  return {
    subscriptions,
    dogs,
    user,
  }
}

export default connect(mapStateToProps)(FreshFood)

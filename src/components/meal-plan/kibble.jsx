import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import LoadingCircle from '../partials/loading'
import MealPlanSelect from './meal-plan-select'
import { userActions } from '../../actions'

const KibbleSelect = props => {
  if (!props.user.kibbles) return <LoadingCircle />

  const { kibbles } = props.user
  const recipeField = kibbles.map((food, i) => (
    <Field
      key={i}
      component={MealPlanSelect}
      name='kibble'
      id='kibble'
      food={food}
      kibble
    />
  ))
  return (
    <div>
      <div className="mb-6 text-xl">
        Kibble
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

export default connect(mapStateToProps)(KibbleSelect)

import React, { Component } from 'react'
import chickenIcon from '../../assets/images/recipe/chicken-recipe.png'
import lambIcon from '../../assets/images/recipe/lamb-recipe.png'
import turkeyIcon from '../../assets/images/recipe/turkey-recipe.png'
import beefIcon from '../../assets/images/recipe/beef-recipe.png'
import { Field, reduxForm } from 'redux-form'

const MealPlanSelect = (props) => {
  // console.log(props)
  const {
    name,
    input,
    food,
    kibble
  } = props
  let icons = { chicken: chickenIcon, beef: beefIcon, lamb: lambIcon, turkey: turkeyIcon }
  const recipeClass = kibble ? `kibble-${food.recipe}` : food.recipe
  return (
    <div className="rounded-xl h-40 w-96 mb-4 flex overflow-hidden">
      <div className={`bg-${recipeClass} w-1/2 h-full flex items-center justify-center`}>
        <img
          src={icons.[food.recipe]}
          className="h-3/4"
        />
      </div>
      <div className="w-2/3 bg-white py-5 flex flex-col items-center justify-between">
        <div className="font-cooper text-xl text-black text-center">
          {food.name}
        </div>
        <div className="text-primary font-bold font-messina">
          See Details
          </div>
        <label
          htmlFor={name}
          className="rounded-xl cursor-pointer w-2/3 border border-green text-primary font-bold py-2 flex justify-center items-center"
        >
          <input
            {...input}
            onChange={input.onChange}
            value={food.recipe}
            className="hiden"
            type={kibble ? "radio" : "checkbox"}
          />
          Add Recipe
        </label>
      </div>
    </div>
  )
}

export default MealPlanSelect

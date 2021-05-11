import React from 'react';
import { connect } from 'react-redux'
import beefIcon from '../../assets/images/recipe/beef-recipe.png'
import chickenIcon from '../../assets/images/recipe/chicken-recipe.png'
import lambIcon from '../../assets/images/recipe/lamb-recipe.png'
import turkeyIcon from '../../assets/images/recipe/turkey-recipe.png'

const MealIcon = ({ source, notFirst }) => (
  <img
    src={source}
    className={`w-12 h-12 rounded-full ${notFirst && '-ml-10'}`}
    alt=""
  />
)


const MealPlanCard = (props) => {
  let currentDog = {}
  const { dogs, dogIndex, subscriptions } = props
  currentDog = dogs[dogIndex]
  let recipeArray = []
  let iconArray = []
  if (currentDog.beef_recipe) {
    recipeArray.push('Savoury Beef')
    iconArray.push(
      <MealIcon key="beef_recipe" notFirst={iconArray.length > 0} source={beefIcon} />
    )
  }
  if (currentDog.chicken_recipe) {
    recipeArray.push('Tender Chicken')
    iconArray.push(
      <MealIcon key="chicken_recipe" notFirst={iconArray.length > 0} source={chickenIcon} />
    )
  }
  if (currentDog.lamb_recipe) {
    recipeArray.push('Luscious Lamb')
    iconArray.push(
      <MealIcon key="lamb_recipe" notFirst={iconArray.length > 0} source={lambIcon} />
    )
  }
  if (currentDog.turkey_recipe) {
    recipeArray.push('hearty Turkey')
    iconArray.push(
      <MealIcon key="turkey_recipe" notFirst={iconArray.length > 0} source={turkeyIcon} />
    )
  }

  let portion = ''

  if (currentDog.portion === 100) {
    portion = 'Full meal'
  } else {
    portion = `${portion}% Kabo`
  }

  var subscriptionArray = Object.values(subscriptions)

  let price = subscriptionArray[dogIndex].invoice_estimate_total

  price /= 100

  const readableRecipe = recipeArray.join(' and ')
  return (
    <div className="w-full flex justify-between font-semibold text-base mb-14">
      <div className="flex">
        {iconArray}
        <div className="ml-9">
          <div>{readableRecipe}</div>
          <div>{portion}</div>
        </div>
      </div>
      <div>${price}</div>
    </div>
  )
}

function mapStateToProps(state) {
  const { user } = state.authentication
  const { subscriptions, dogs } = state.user
  return {
    user,
    subscriptions,
    dogs,
  }
}

export default connect(mapStateToProps)(MealPlanCard)

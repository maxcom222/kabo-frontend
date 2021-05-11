import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValues, formValueSelector, getFormValues, reduxForm, Field } from 'redux-form'
import { userActions } from '../../actions'
import { Button } from '../../stories/Button'
import FreshFood from '../../components/meal-plan/fresh-food'
import KibbleSelect from '../../components/meal-plan/kibble'


export class EditPlan extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAccountData()
    this.props.getRecipeData()
  }

  submit(event) {
    console.log(event)
  }
  render() {
    console.log(this.props)
    const { dogs, handleSubmit } = this.props
    const dog = dogs[0]
    return (
      <div className="w-full flex flex-col py-9 items-center bg-recipeGray">
        <div className="font-messina font-bold mb-12 text-black">Choose up to 2 recipes for Bella</div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="w-full flex justify-center" >
            <FreshFood className="mr-4" />
            <KibbleSelect />
          </div>
          <button label="submit" type="submit" >submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getAccountData: () => dispatch(userActions.getAccountData()),
    getRecipeData: () => dispatch(userActions.getRecipeData()),
  }
)

const mapStateToProps = (state) => {
  const { user: { subscriptions, dogs }, user } = state
  const dog = dogs.length > 0 ? dogs[0] : {}
  // const {chicken_recipe, beef_recipe, turkey_recipe, lamb_recipe} = dog
  // console.log(dogs)
  return {
    subscriptions,
    dogs,
    user,
    initialValues: {
      chicken_recipe: dog.chicken_recipe,
      beef_recipe: dog.beef_recipe,
      turkey_recipe: dog.turkey_recipe,
      lamb_recipe: dog.lamb_recipe,
    },
  }
}

EditPlan = reduxForm({
  form: 'editMealPlan',
})(EditPlan)

export default connect(mapStateToProps, mapDispatchToProps)(EditPlan)

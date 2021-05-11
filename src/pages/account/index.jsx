/* eslint-disable semi */
import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as DeliveryBox } from '../../assets/images/delivery-box.svg'
import { ReactComponent as Arrow } from '../../assets/images/Vectorarrow.svg'
import { ReactComponent as MealBox } from '../../assets/images/meal-plan.svg'

import DeliveryModal from '../../components/account/delivery-modal.jsx'
import MealPlanModal from '../../components/account/meal-modal.jsx'
import FrequencyModal from '../../components/account/delivery-frequency.jsx'
import LoadingCircle from '../../components/partials/loading.jsx'

import { userActions } from '../../actions'

class AccountPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextExpanded: false,
      mealExpanded: false,
      frequencyExpanded: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal(name) {
    this.setState({
      [name]: !this.state.[name],
    })
  }

  componentDidMount() {
    this.props.getAccountData()
    this.props.getSubscriptionData()
  }

  render() {
    if (!this.props.dogs.length) return <LoadingCircle />
    const { user, subscriptions, dogs } = this.props

    let dogNames = dogs.map((dog, i) => { return dog.name })
    let readableNames = dogNames.join(' and ')

    const sectionHeader = (stateValue, Icon, text, Modal) => {
      let expanded = this.state.[stateValue]
      return (
        <div>
          <div
            onClick={() => this.openModal(stateValue)}
            className={
              `flex bg-account justify-between items-center h-12 text-xl font-light p-3 cursor-pointer 
              ${expanded ? 'rounded-t-xl border-t border-l border-r border-gray-300' : 'rounded-xl'}`
            }
          >
            <div className="flex justify-between items-center  h-full">
              <div className="w-8 h-8 mr-6">
                <Icon className="w-full h-full" />
              </div>
              {text}
            </div>
            <Arrow className="w-8 h-3" style={{ transform: expanded ? 'rotateX(180deg)' : null }} />
          </div>
          { expanded && <Modal />}
        </div >
      )
    }

    const profileImages = dogs.map((dog, i) => { return (<img key={i} src="https://bit.ly/3bXTqXh" alt="" className="mr-9 h-16 w-16 rounded-full" />) })

    return (
      <div className="container pb-40 bg-white" >
        <div className="account-dashboard w-full bg-account flex items-center h-28 rounded-xl p-8 text-5x1 font-bold mb-6 font-messina" >
          <div className="flex justify-center items-center">
            {profileImages}
            <div className="h-full text-xl font-bold m-6 font-messina">
              {readableNames}'s Dashboard
              <div className="text-primary text-sm mt-1.5" >Tell us more about {readableNames} </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
          {sectionHeader('nextExpanded', DeliveryBox, 'Next Delivery', DeliveryModal)}
          {sectionHeader('mealExpanded', MealBox, 'Meal Plan', MealPlanModal)}
          {sectionHeader('frequencyExpanded', DeliveryBox, 'Delivery Frequency', FrequencyModal)}
        </div>
      </div >
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getAccountData: () => dispatch(userActions.getAccountData()),
    getSubscriptionData: () => dispatch(userActions.getSubscriptionData())
  }
)

const mapStateToProps = (state) => {
  const { user } = state.authentication
  const { subscriptions, dogs } = state.user
  return {
    user,
    subscriptions,
    dogs
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountPage)

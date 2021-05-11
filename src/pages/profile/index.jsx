/* eslint-disable semi */
import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Arrow } from '../../assets/images/Vectorarrow.svg'
import LoadingCircle from '../../components/partials/loading.jsx'
import { userActions } from '../../actions'

import { AccountDetails } from '../../components/profile/account-details.jsx'
import { Billing } from '../../components/profile/billing.jsx'
import { DeliveryAddress } from '../../components/profile/delivery-address.jsx'

class ProfilePage extends React.Component {
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

    return (
        <div className="flex flex-wrap">
            <AccountDetails user={user} dogs={dogs} />
            <Billing/>
            <DeliveryAddress/>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getAccountData: () => dispatch(userActions.getAccountData()),
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
)(ProfilePage)

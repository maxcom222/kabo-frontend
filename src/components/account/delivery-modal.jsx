import React from 'react';
import { connect } from 'react-redux'
import MealPlanCard from './mealplan-card.jsx'
import DogSelector from './dog-selector.jsx'
import { reduxForm } from 'redux-form';
import Stepper from '../partials/stepper.jsx';
import { Button } from '../../stories/Button.js';

class DeliveryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogIndex: 0,
    };
    this.setDog = this.setDog.bind(this)
  }

  setDog(i) {
    this.setState({
      dogIndex: i
    })
  }

  render() {
    const { dogIndex } = this.state
    const { dogs, user } = this.props
    const dogsLength = dogs.length

    let deliveryStatus

    if (user.subscription_phase_status = 'normal_user_preparing_order') {
      deliveryStatus = 1
    } else {
      deliveryStatus = 0
    }

    return (
      <div className="py-8 px-5 relative border-r border-l rounded-b-xl border-b border-gray-300">
        { dogsLength > 1 && <DogSelector dogs={dogs} setDog={this.setDog} dogIndex={dogIndex} />}
        <MealPlanCard dogIndex={dogIndex} />
        <nav aria-label="Progress">
          <Stepper
            labels={
              [
                { main: "Scheduled", sub: "We have your order" },
                { main: "Preparing", sub: "We're getting things ready" },
                { main: "Delivering", sub: "Your order is out for delivery" },

              ]
            }
            current={deliveryStatus}
          />
        </nav>
        <div
          className="text-primary mt-7 font-bold"
        >
          Skip this delivery
        </div>
      </div>
    );
  }
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

reduxForm({
  form: 'nextDelivery',
})(DeliveryModal)

// DeliveryModal = reduxForm({ form: 'nextDelivery' })(DeliveryModal)
export default connect(mapStateToProps)(DeliveryModal)

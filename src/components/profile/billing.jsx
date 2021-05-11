import React from 'react'

import Button from '../global/button.jsx'
import Reminder from '../global/reminder.jsx'
import PaymentCardIcon from '../global/payment-card-icon.jsx'
import OrderCard from '../global/order-card.jsx'

class Billing extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { user } = this.props

      const ccLastFour = "4242"

      return (
        <div className="container pb-40 bg-white shadow-2xl m-6 p-4 rounded-xl flex-initial inline-block  w-accountdetail-card"
            >
            <div className="flex-auto text-2xl font-cooper mb-6">
                Billing
            </div>
            <Reminder content="Keep in mind changes you make to your delivery amount, frequency and next delivery date will only affect your next delivery"/>
            <div className="flex my-6">
                <PaymentCardIcon icon="visa" />
                <span className="inline-block ml-3">Visa ending in {ccLastFour}</span>
            </div>
            <Button text="Change Payment Method" />
            <div className="flex-auto text-lg font-semibold my-4">
                Recent Orders
            </div>
            <div className="flex mb-5">
              <OrderCard orderNumber="2222" orderSize="10" total="$24.23 CAD" status="Paid" styles="mr-6" />
              <OrderCard orderNumber="2222" orderSize="10" total="$24.23 CAD" status="Paid" />
            </div>
            <Button text="View All Orders"/>
        </div>
      )
    }
  }
  
function mapStateToProps(state) {
    const { user } = state.authentication
    return {
      user,
    }
}
  
export { Billing }
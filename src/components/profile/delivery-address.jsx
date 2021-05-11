import React from 'react'

import Input from '../global/input.jsx'
import Reminder from '../global/reminder.jsx'

class DeliveryAddress extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { user } = this.props

      return (
        <div className="container pb-40 bg-white shadow-2xl m-6 p-4 rounded-xl flex-initial inline-block w-accountdetail-card"
            >
            <div className="flex-auto text-2xl font-cooper mb-6">
                Delivery Address
            </div>
            <Reminder content="Keep in mind you will be billed every 4 weeks" styles="mb-4" />
            <Input name="FIRST NAME" styles="mr-2.5 mb-4" />
            <Input name="LAST NAME" styles="mb-4 mr-2.5"/>
            <Input name="STREET ADDRESS" styles="mr-2.5 mb-4" />
            <Input name="APT/SUITE" styles="mb-4 mr-2.5" />
            <Input name="CITY" styles="mr-2.5 mb-4" />
            <Input name="POSTAL CODE" styles="mb-4"/>
            <Input name="SPECIAL DELIVERY INSTRUCTIONS" type="large"/>
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
  
  export { DeliveryAddress }
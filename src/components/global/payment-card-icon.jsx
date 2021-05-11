import React from 'react'

import visa from '../../assets/images/visa-icon.png'

class PaymentCardIcon extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { icon } = this.props

      return (
        <div className="inline-block">
            { (icon=="visa") && <img src={visa} /> }
        </div>
      )
    }
}

export default PaymentCardIcon

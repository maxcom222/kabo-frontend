import React from 'react'

class OrderCard extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { orderNumber, orderSize, total, status, styles="" } = this.props

      return (
        <div className={`pb-40 bg-white max-h-40 shadow-lg p-4 rounded-xl w-56 inline-block ${styles}`} >
            <div className="font-bold text-3xl">Order #{orderNumber}</div>
            <span className="text-sm my-1">{orderSize} items ({total})</span>
            <br/>
            <span className="text-sm my-1">Status: {status}</span>
            <br/>
            <a href="#" className="font-bold text-primary">View Order</a>
        </div>
      )
    }
}

export default OrderCard

import React from 'react'

class Reminder extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { content, styles="" } = this.props

      return (
        <div className={`rounded-xl p-6 bg-gray-100 ${styles}`} style={{"backgroundColor":"#FFF5E7"}} >
            <div className="font-bold text-base mb-1">
                Prompt reminder title
            </div>
            <div className="text-sm">
                {content}
            </div>
        </div>
      )
    }
}

export default Reminder

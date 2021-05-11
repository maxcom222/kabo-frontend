import React from 'react'

class Button extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { text, styles="" } = this.props

      return (
        <>
          <button className={`border rounded-xl py-2 px-6 text-base font-bold text-primary button-border ${styles}`} >
            {text}
          </button>
        </>
      )
    }
}

export default Button

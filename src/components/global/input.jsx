import React from 'react'

class Input extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { name, type="default", size="", styles="", inputValue="" } = this.props

      return (
          <>
            {(type=="default") && 
                <div className={`border rounded h-14 ${size} ${styles} inline-block`}>
                    <label for={name} className="m-1 ml-2.5 text-xs">{name}</label>
                    <br/>
                    <input id={name} value={inputValue} className="outline-none w-4/5 text-grey-darkest text-sm h-5 mb-2.5 ml-2.5"></input>
                </div>
            }
            {(type=="large") && 
                <div className="border rounded h-14 h-20">
                    <label for="input" className="m-1 text-xs">{name}</label>
                    <br/>
                    <textarea id="input" className="outline-none text-grey-darkest ml-2.5 h-11 mb-2.5 text-sm resize-none"></textarea>
                </div>
            }
          </>
      )
    }
}

export default Input

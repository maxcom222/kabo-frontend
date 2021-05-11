import React from 'react'

import chevron from '../../assets/images/chevron.svg'

const DROPDOWN_DEFAULT_OPTIONS=[
    {id:0, value:"Option 1", text:"Option 1" },
    {id:1, value:"Option 2", text:"Option 2" }
]

class Dropdown extends React.Component {
    constructor(props) {
      super(props)
    } 
  
    render() {

      const { name, styles="", inputValue="", size="default" } = this.props
      var { options } = this.props

      if (!options) options = DROPDOWN_DEFAULT_OPTIONS

      const items = options.map((item) =>
        <option key={item.id} value={item.value}>{item.text}</option>
    );

      return (
        <div className={`border rounded h-14 inline-block ${styles}`} >
            <label for="input" class="m-1 ml-2.5 text-xs">{name}</label>
            <br/>
            <select id="input" class={`outline-none text-grey-darkest text-sm h-5 mb-2.5 ml-2.5 ${(size=="small") ? "w-2/5" : "w-3/5"}`}
              style={{"webkitAppearance":"none", "MozAppearance":"none"}}>
              <option key="0" selected={true} defaultValue={inputValue}>{inputValue}</option>
                {items}
            </select>
            <img src={chevron} className="float-right mr-3.5 w-4" />
        </div>
      )
    }
}

export default Dropdown

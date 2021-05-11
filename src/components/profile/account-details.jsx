import React from 'react'

import Input from '../global/input.jsx'
import Button from '../global/button.jsx'
import Dropdown from '../global/dropdown.jsx'

import addIcon from '../../assets/images/add_icon.svg'

class AccountDetails extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      const { user=null, dogs=null } = this.props

      const dog = dogs[0]
      var dogBirthday = parseDogAge(dog)

      return (
        <div className="container pb-40 bg-white shadow-2xl m-6 p-4 rounded-xl flex-initial inline-block w-accountdetail-card"
            >
            <div className="flex-auto text-2xl font-cooper mb-6">
                Account Details
            </div>
              <Input name="EMAIL ADDRESS" size="w-2/5" styles="mr-2.5" inputValue={user.email} />
              <Input name="PHONE NUMBER" size="w-2/5"/>
            <Button text="Update My Password" styles="my-6" />
            <div className="flex-auto text-lg font-semibold mb-2">
                Dog Details
            </div>
            <div className="flex">
              <Input name="DOG NAME" size="w-2/5" styles="mr-2.5" inputValue={dog.name} />
              <Dropdown name="DOG TYPE" styles="w-2/5" inputValue={dog.breed} />
            </div>
            <div className="flex-auto text-xs font-semibold ">
                DATE OF BIRTH
            </div>
            <Dropdown name="MONTH" styles="w-2/5 mr-2.5 mb-6" inputValue={dogBirthday.month} />
            <Dropdown name="DAY" styles="w-1/5 mr-2.5 mb-6" inputValue={dogBirthday.day} size="small" />
            <Dropdown name="YEAR" styles="w-1/5 mb-6" inputValue={dogBirthday.year} size="small" />
            <Dropdown name="GENDER" styles="w-2/5 mr-2.5 mb-6" inputValue={capitalizeFirstLetter(dog.gender)} />
            <Dropdown name="WEIGHT" styles="w-2/5 mb-6" inputValue={dog.weight} />
            <div className="flex font-semibold mt-9 text-primary">
                <a href="#">
                    <img src={addIcon} className="inline-block mr-2.5" />
                    <span>Add another dog</span>
                </a>
            </div>
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

function parseDogAge(dog) {
  var date = new Date()
  date.setMonth(date.getMonth() - dog.age_in_months)
  return {"year":date.getFullYear(), "month":date.toLocaleString('default', { month: 'long' }), "day":date.getDay()}
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { AccountDetails }

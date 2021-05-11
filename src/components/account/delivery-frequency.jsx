import React from 'react';
import MealPlanCard from './mealplan-card.jsx'
import DogSelector from './dog-selector.jsx'
import { Field, reduxForm } from 'redux-form'
import { ReactComponent as SelectDown } from '../../assets/images/select-down.svg'
import { connect } from 'react-redux';

const test = {
  status: 0,
  recipe: 'Savoury Beef and TEnder Chicken',
  price: '$28',
  portion: 'full Meal',
};

const testU = {
  trial: false,
  has_delivery_frequency: true,
  subscription: {
    values: {
      id: "1ps2gsyRVaM3dI1tdT",
      plan_id: "100_beef_4_weeks",
      plan_quantity: 177,
      plan_unit_price: 50,
      billing_period: 4,
      billing_period_unit: "week",
      customer_id: "I6JyG0fRVaM3Io1nBV",
      plan_amount: 8850,
      plan_free_quantity: 0,
      status: "active",
      current_term_start: 1610730000,
      current_term_end: 1613149200,
      next_billing_at: 1613149200,
      created_at: 1562543683,
      started_at: 1564761600,
      activated_at: 1564761600,
      updated_at: 1611260720,
      has_scheduled_changes: true,
      resource_version: 1611260720088,
      deleted: false,
      object: "subscription",
      coupon: "TESTINGCOUPON",
      currency_code: "CAD",
      charged_event_based_addons: [
        {
          id: "25_beef_2_weeks",
          last_charged_at: 1562543683,
          object: "charged_event_based_addon"
        }
      ],
      "coupons": [
        {
          "coupon_id": "TESTINGCOUPON",
          "apply_till": 1613581200,
          "applied_count": 2,
          "object": "coupon"
        }
      ],
      "due_invoices_count": 0,
      "mrr": 7209,
      "exchange_rate": 1,
      "base_currency_code": "CAD",
      "shipping_address": {
        "first_name": "nocodetest",
        "last_name": "test",
        "phone": "(647) 244-0057",
        "line1": "100 main st",
        "city": "toronto",
        "state_code": "ON",
        "state": "Ontario",
        "country": "CA",
        "zip": "M5V3T3",
        "validation_status": "not_validated",
        "object": "shipping_address"
      },
      "cf_trial_start_date": 1563552000,
      "cf_dog_name": "jontest"
    },
    "sub_types": {
      "addons": {},
      "event_based_addons": {},
      "charged_event_based_addons": {},
      "coupons": {},
      "shipping_address": {},
      "referral_info": {},
      "contract_term": {}
    },
    "dependant_types": {},
    "id": "1ps2gsyRVaM3dI1tdT",
    "plan_id": "100_beef_4_weeks",
    "plan_quantity": 177,
    "plan_unit_price": 50,
    "billing_period": 4,
    "billing_period_unit": "week",
    "customer_id": "I6JyG0fRVaM3Io1nBV",
    "plan_amount": 8850,
    "plan_free_quantity": 0,
    "status": "active",
    "current_term_start": 1610730000,
    "current_term_end": 1613149200,
    "next_billing_at": 1613149200,
    "created_at": 1562543683,
    "started_at": 1564761600,
    "activated_at": 1564761600,
    "updated_at": 1611260720,
    "has_scheduled_changes": true,
    "resource_version": 1611260720088,
    "deleted": false,
    "object": "subscription",
    "coupon": "TESTINGCOUPON",
    "currency_code": "CAD",
    "charged_event_based_addons": [
      {
        "values": {
          "id": "25_beef_2_weeks",
          "last_charged_at": 1562543683,
          "object": "charged_event_based_addon"
        },
        "sub_types": {},
        "dependant_types": {},
        "id": "25_beef_2_weeks",
        "last_charged_at": 1562543683,
        "object": "charged_event_based_addon"
      }
    ],
    "coupons": [
      {
        "values": {
          "coupon_id": "TESTINGCOUPON",
          "apply_till": 1613581200,
          "applied_count": 2,
          "object": "coupon"
        },
        "sub_types": {},
        "dependant_types": {},
        "coupon_id": "TESTINGCOUPON",
        "apply_till": 1613581200,
        "applied_count": 2,
        "object": "coupon"
      }
    ],
    "due_invoices_count": 0,
    "mrr": 7209,
    "exchange_rate": 1,
    "base_currency_code": "CAD",
    "shipping_address": {
      "values": {
        "first_name": "nocodetest",
        "last_name": "test",
        "phone": "(647) 244-0057",
        "line1": "100 main st",
        "city": "toronto",
        "state_code": "ON",
        "state": "Ontario",
        "country": "CA",
        "zip": "M5V3T3",
        "validation_status": "not_validated",
        "object": "shipping_address"
      },
      "sub_types": {},
      "dependant_types": {},
      "first_name": "nocodetest",
      "last_name": "test",
      "phone": "(647) 244-0057",
      "line1": "100 main st",
      "city": "toronto",
      "state_code": "ON",
      "state": "Ontario",
      "country": "CA",
      "zip": "M5V3T3",
      "validation_status": "not_validated",
      "object": "shipping_address"
    },
    "cf_trial_start_date": 1563552000,
    "cf_dog_name": "jontest"
  },
  "subscription_phase": {
    "status": "normal_user_scheduled_order",
    "date": "2021-02-19T12:00:00.000-05:00",
    "changes_applied_delivery_date": "2021-02-19T12:00:00.000-05:00"
  },
  all_active_or_future_subscriptions_are_custom: false,
  user: {
    amount_of_food_options: [["2 weeks of food", "2_weeks"], ["4 weeks of food", "4_weeks"]],
    how_often_options: [["every 2 weeks", "2_week-delay"], ["every 4 weeks", "4_week-delay"], ["every 6 weeks", "6_week-delay"], ["every 8 weeks", "8_week-delay"], ["every 12 weeks (3 months)", "12_week-delay"], ["every 26 weeks (6 months)", "26_week-delay"]],
    starting_date: "1613149200",
    delivery_starting_date_options: [["Feb  5", 1611939600], ["Feb 19", 1613149200], ["Mar  5", 1614358800]],
    readable_chargebee_plan_interval: ["4 weeks of food", "every 4 weeks"]
  }
}



class FrequencyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogIndex: 0,
    };
    this.setDog = this.setDog.bind(this)
  }

  setDog(i) {
    this.setState({
      dogIndex: i,
    })
  }

  render() {
    const {
      status,
      recipe,
      price,
      portion,
    } = test
    const { dogIndex } = this.state
    const { dogs } = this.props
    const currentDog = dogs[dogIndex]

    const SelectOptions = (array) => (array.map((delayOption, i) => (
      <option className="w-full" key={i} value={delayOption[0]}>{delayOption[0]}  </option>
    )))

    return (
      <div className="py-8 px-5 relative border-r border-l rounded-b-xl border-b border-gray-300">
        <div className="text-black font-messina bg-promptYellow p-6 rounded-xl">
          <div className="font-semibold">
            Reminder about Deliveries
          </div>
          <div className="text-black text-sm font-normal mt-3">
            Keep in mind changes you make to your delivery amount,
            frequency and next delivery date will only affect your next delivery
          </div>
          <div className="text-primary font-semibold m-3" >
            Learn more about our deliveries
          </div>
        </div>
        <form
          onSubmit={() => onSubmit()}>
          <div
            className="text-lightGrey font-messina w-100 text-xs leading-4 font-semibold mt-5"
          >
            Amount of Food Per dog
          </div>
          <Field className="w-full" name="amount_of_food" label="How Often" component="select">
            {SelectOptions(testU.user.amount_of_food_options)}
          </Field>
          <div
            className="text-lightGrey font-messina w-100 text-xs leading-4 font-semibold mt-5"
          >
            How Often?
          </div>
          <Field className="w-full" name="how_often" label="How Often" component="select">
            {SelectOptions(testU.user.how_often_options)}
          </Field>
          <div
            className="text-lightGrey font-messina w-100 text-xs leading-4 font-semibold mt-5"
          >
            Next Delivery Date
          </div>
          <Field className="w-full " name="how_often" label="How Often" component="select">
            {SelectOptions(testU.user.delivery_starting_date_options)}
          </Field>
          <button
            type="submit"
            className="bg-primary text-white rounded-xl font-semibold py-2.5 px-6 mt-8"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  const { user } = state.authentication
  const { subscriptions, dogs } = state.user
  return {
    user,
    subscriptions,
    dogs,
  }
}

FrequencyModal = reduxForm({ form: 'deliveryFrequency' })(FrequencyModal)

export default connect(mapStateToProps)(FrequencyModal)

import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import DatePicker from "react-datepicker";
import moment from 'moment';

import { userActions } from '../../actions';
import LoadingCircle from '../partials/loading';
import DogSelector from './dog-selector';
import MealPlanCard from './mealplan-card';
import PortionDisplay from './portion-display';

import Modal from '../global/modal';
import Radio from '../global/radio';

import beefIcon from '../../assets/images/recipe/beef-100@2x.jpg';
import { ReactComponent as FilledCircle } from '../../assets/images/filled-circle.svg'

const test = {
  status: 0,
  recipe: 'Savoury Beef and TEnder Chicken',
  price: '$28',
  portion: 'full Meal',
  recommended: '$12',
  planLength: 2,
};

class MealPlanModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogIndex: 0,
      showPauseBox: false,
      showPauseBoxDate: false,
      showPauseBoxSuccess: false,
      pauseType: '1_week',
      pauseUntil: null
    };
    this.setDog = this.setDog.bind(this)
  }

  setDog(i) {
    this.setState({
      dogIndex: i,
    })
  }

  pauseMeal(){
    const dogId = this.props.dogs[this.state.dogIndex].id;
    const pauseUntil = 
      (
        this.state.pauseType === '1_week' ||
        this.state.pauseType === '2_week' ||
        this.state.pauseType === 'forever'
      )
        ? this.state.pauseType
        : this.state.pauseUntil;

    this.setState({
      showPauseBox: false,
      showPauseBoxSuccess: true
    });

    this.props.pauseSubscription({
      dogId: dogId,
      pauseUntil: pauseUntil
    });
  }

  render() {
    const { dogIndex } = this.state
    const { dogs, user, pauseSubscription, cancelSubscription } = this.props
    const dogsLength = dogs.length
    const currentDog = dogs[dogIndex]
    const { portion } = currentDog;

    console.log('subscriptions',this.props.subscriptions);
    console.log('user', this.props.user);

    return (
      <>
        <div className="py-8 px-5 relative border-r border-l rounded-b-xl border-b border-gray-300">
          {dogsLength > 1 && <DogSelector dogs={dogs} setDog={this.setDog} dogIndex={dogIndex} />}
          <MealPlanCard dogIndex={dogIndex} portion={portion} />
          <div className="text-primary w-full font-bold">
            Select a different meal plan
          </div>
          <div className="text-lightGrey text-xs text-semibold mt-7">
            PORTIONS
          </div>
          <PortionDisplay portion={portion} />
          <div className="w-4/5 flex justify-between pt-7">
            <button
              type="button"
              onClick={() => {
                this.setState({ showPauseBox: true });
              }}
              className="text-primary font-bold focus:outline-none"
            >
              Pause Meals
            </button>
            <button
              type="button"
              onClick={() => cancelSubscription(user.chargebee_customer_id)}
              className="text-primary font-bold"
            >
              Cancel Meals
            </button>
          </div>
        </div>

        <Modal // initial pausebox modal
          title="Pause Kabo"
          isOpen={this.state.showPauseBox}
          onRequestClose={() => this.setState({ showPauseBox: false })}
        >
          <div className="p-6">
            <div className="lg:flex justify-between lg:mb-12 mb-8">
              <div className="flex justify-between lg:w-80">
                <div className="flex">
                  <img className="w-13 mr-5.5" src={beefIcon} />
                  <div>
                    <h5 className="text-base font-semibold ">Savoury Beef</h5>
                    <p className="text-sm">14 days worth of full-meal</p>
                  </div>
                </div>
                <h5 className="text-base font-semibold ">$43.12</h5>
              </div>
              <div className="mt-6 sm:mt-0">
                <a
                  className="text-sm font-semibold text-primary lg:mr-2 cursor-pointer"
                  onClick={() => {
                  }}
                >
                  Select a different meal plan
                </a>
              </div>
            </div>
            <div className="lg:flex justify-between lg:mb-9">
              <div className="lg:w-80">
                <Radio
                  value="1_week"
                  text="Pause Blake’s account for 1 delivery"
                  onChange={() => this.setState({ pauseType: '1_week' })}
                  selected={this.state.pauseType === '1_week'}
                  className="mb-7"
                />
                <Radio
                  value="2_week"
                  text="Pause Blake’s account for 2 delivery"
                  onChange={() => this.setState({ pauseType: '2_week' })}
                  selected={this.state.pauseType === '2_week'}
                  className="mb-7"
                />
                <Radio
                  value="forever"
                  text="Pause Blake’s account indefinitely"
                  onChange={() => this.setState({ pauseType: 'forever' })}
                  selected={this.state.pauseType === 'forever'}
                  className="mb-7"
                />
                <Radio
                  value="specific"
                  text={
                    <>
                      <span>
                        Pause until &nbsp;
                        {this.state.pauseUntil === null
                          ? 'a specific date'
                          : moment(this.state.pauseUntil).format('MMM DD, YYYY')
                        }
                      </span>
                      &nbsp;
                      {this.state.pauseUntil !== null &&
                        <span
                          className="text-primary text-sm"
                          onClick={() =>
                            this.setState({
                              showPauseBox: false,
                              showPauseBoxDate: true
                            })
                          }
                        >
                          Edit Date
                      </span>
                      }
                    </>
                  }
                  onChange={() => {
                    if (this.state.pauseUntil === null) {
                      this.setState({
                        showPauseBox: false,
                        showPauseBoxDate: true
                      });
                    } else {
                      this.setState({
                        pauseType: 'specific'
                      });
                    }
                  }}
                  selected={this.state.pauseType === 'specific'}
                />
              </div>
              <div className="mt-7 mb-6 sm:m-0">
                <div className="lg:w-72 p-6 bg-promptYellow rounded-1lg">
                  <h3 className="text-base font-semibold mb-1.3">
                    You can unpause anytime
                  </h3>
                  <p className="text-sm">
                    Placeholder keep in mind you can pause your account at anytime
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="rounded-xl py-3 px-8 text-base font-bold bg-primary text-white"
                onClick={() => this.pauseMeal()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </Modal>

        <Modal // pausebox calendar
          title="Pause Kabo"
          isOpen={this.state.showPauseBoxDate}
          onRequestClose={() => this.setState({ showPauseBoxDate: false })}
        >
          <div className="p-6">
            <h2 className="ml-0 sm:ml-8 text-xl font-bold">Choose the date you'd like to pause until</h2>
            <div className="flex justify-center mt-6 mb-4">
              <DatePicker
                dateFormat="YYYY-MM-DD"
                startDate
                selected={
                  this.state.pauseUntil !== null
                    ? new Date(this.state.pauseUntil)
                    : null
                }
                onChange={date => this.setState({ pauseUntil: moment(date).format('YYYY-MM-DD') })}
                inline
                useWeekdaysShort={true}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-xl py-3 px-8 text-base font-bold bg-primary text-white"
                onClick={() => this.setState({
                  pauseType: 'specific',
                  showPauseBox: true,
                  showPauseBoxDate: false
                })}
              >
                Pick Date
              </button>
            </div>
          </div>
        </Modal>

        <Modal // pausebox success
          title="Pause Kabo"
          isOpen={this.state.showPauseBoxSuccess}
          onRequestClose={() => this.setState({ showPauseBoxSuccess: false })}
        >
          <div className="py-6 px-16">
            <div className="flex items-center flex-col mb-4">
              <FilledCircle className="rounded-full h-7.3 w-7.3 mb-6" />
              <h2 className="text-xl font-bold mb-4">Choose the date you'd like to pause until</h2>
              <p className="text-sm mb-5 text-center">Your account is paused placehold indefinitely, for 1<br />delivery or 2 deliveries, etc.</p>
              <div className="w-full p-6 bg-promptYellow rounded-1lg">
                <h4 className="text-center text-base font-semibold mb-1">You can unpause anytime</h4>
                <p className="text-center text-sm">Placeholder keep in mind you can pause your account at anytime</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-xl py-3 px-8 text-base font-bold bg-primary text-white"
                onClick={() => this.setState({
                  showPauseBoxSuccess: false
                })}
              >
                Done
              </button>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  pauseSubscription: (data) => dispatch(userActions.pauseSubscription(data)),
  cancelSubscription: (userId) => dispatch(userActions.cancelSubscription(userId)),
})

const mapStateToProps = (state) => {
  const { user } = state.authentication
  const { subscriptions, dogs } = state.user
  return {
    user,
    subscriptions,
    dogs,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanModal)

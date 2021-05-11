import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class AllOrdersPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div className="container pb-40 bg-white" >
        <div className="flex items-center flex-col mt-10">
          <div className="mb-14">
            <div className="text-3xl text-center mb-2">Recent Orders</div>
            <div className="text-xs text-center">You will receive an email confirmation shortly.</div>
          </div>
          <div className="flex justify-center">

            <div className="w-72 p-5 mx-2 border border-gray-200 rounded-xl">
              <div className="text-2xl font-bold mb-1">Order #2221</div>
              <div className="text-xs mb-2">10 items ($24.23 CAD)</div>
              <Link
                className="text-primary text-xs font-bold cursor-pointer"
                to={'/orders/unknown'}
              >
                View Order
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getOrderData: () => dispatch(userActions.getOrderData())
  }
)

const mapStateToProps = (state) => {
  console.log('state in mapstate to props', state);
  const { user: { subscriptions, dogs }, user } = state

  return {
    subscriptions,
    user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrdersPage);
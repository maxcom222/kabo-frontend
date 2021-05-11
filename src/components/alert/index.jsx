import React from 'react'
import { connect } from 'react-redux'

class Alert extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { alert } = this.props
    return (
      <>
        {alert.message &&
          <div className={`alert ${alert.type} flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300`}>
            <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
              <span className="text-red-500">
                <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
              </span>
            </div>
            <div className="alert-content ml-4">
              <div className="alert-title font-semibold text-lg text-red-800">
                Error
              </div>
              <div className="alert-description text-sm text-red-600">
                {alert.message}
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
    alert
  }
}

const connectedAlert = connect(mapStateToProps)(Alert)
export { connectedAlert as Alert } 

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selected = this.props.selected;

    return (
      <div
        className={`flex cursor-pointer ${this.props.className}`}
        onClick={() => this.props.onChange()}
      >
        <div
          className={`
            flex justify-center items-center w-6 mr-3 rounded-3xl 
            ${!selected ? 'cursor-pointer' : ''}
            ${selected ? 'bg-primary' : 'border-solid border-gray-700 border'}
          `}
        >
          <div className={`w-2 h-2 rounded-lg bg-white`}></div>
        </div>
        <div
          className={`
            font-base font-semibold
            ${selected ? 'text-black' : 'text-gray-500'}
          `}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Radio;
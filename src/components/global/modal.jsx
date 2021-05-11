import React from 'react';
import ReactModal from 'react-modal';

import imgClose from '../../assets/images/modal-close.svg';

ReactModal.setAppElement('#root')

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        overlayClassName="fixed inset-0 flex justify-center items-start bg-black bg-opacity-30 z-50"
        className="w-full max-w-2xl h-full sm:h-auto bg-white lg:mt-64 lg:rounded-xl shadow-modal outline-none"
        onRequestClose={() => this.props.onRequestClose()}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between">
          <h3 className="text-xl">{this.props.title}</h3>
          <img className="cursor-pointer" src={imgClose} onClick={() => this.props.onRequestClose()} />
        </div>
        <div>{this.props.children}</div>
      </ReactModal>
    );
  };
}

export default Modal;
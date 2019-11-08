import React from 'react';
import { connect } from 'react-redux';
import { updateTotal } from '../actions/actions.js'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    price: state.car,
  }
}

export default connect(mapStateToProps, {updateTotal})(Total);

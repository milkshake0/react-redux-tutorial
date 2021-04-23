import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     number: state.counter.number,
//   };
// };

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ increase, decrease }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
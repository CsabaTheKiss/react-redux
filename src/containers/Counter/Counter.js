import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFromCounter}  />
            </div>
        );
    }
}

// in which parts of the store is this component interested
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

// in which dispatch actions is this component interested
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddToCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractFromCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
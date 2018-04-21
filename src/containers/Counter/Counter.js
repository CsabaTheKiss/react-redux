import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFromCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

// in which parts of the store is this component interested
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

// in which dispatch actions is this component interested
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddToCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtractFromCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
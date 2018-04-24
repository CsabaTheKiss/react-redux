import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActionCreators from '../../store/actions/counter';
import * as resultActionCreators from '../../store/actions/result';

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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
        ctr: state.counterReducer.counter,
        storedResults: state.resultReducer.results
    };
}

// in which dispatch actions is this component interested
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(counterActionCreators.increment()),
        onDecrementCounter: () => dispatch(counterActionCreators.decrement()),
        onAddToCounter: () => dispatch(counterActionCreators.add(5)),
        onSubtractFromCounter: () => dispatch(counterActionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(resultActionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(resultActionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    incrementByAmount,
    selectCount, selectHistoryStack, updateHistory, clearHistory
} from './calculatorSlice';

export function Calculator() {
    const count = useSelector(selectCount);
    const history = useSelector(selectHistoryStack)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('1');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div>
                {history.slice(0).reverse().map((elem, idx) => {
                return <h4>{elem}</h4>;})
                }
            </div>
            <div>
                <span><h3>{count}</h3></span>
            </div>
            <div>
                <input
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() => {
                        dispatch(updateHistory(incrementValue));
                        dispatch(incrementByAmount(incrementValue));
                    }}
                >
                    Add Amount
                </button>
                <button
                    onClick={() => {
                        dispatch(updateHistory(-incrementValue));
                        dispatch(incrementByAmount(-incrementValue));
                    }}
                >
                    Subtract Amount
                </button>
                <button
                    onClick={() => {
                        dispatch(clearHistory());
                    }}
                >
                    Clear History
                </button>
            </div>
        </div>
    );
}

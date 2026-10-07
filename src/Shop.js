import React from 'react'
import { useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';

const Shop = () => {
  const dispatch = useDispatch(); 
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="container p-3 my-3 text-center">
        <h2>Deposit / Withdraw Money</h2>
      <button className="btn btn-primary mx-2" type="button" onClick={() => withdrawMoney(100)}>-</button>
      Update your balance
      <button className="btn btn-primary mx-2" type="button" onClick={() => depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop

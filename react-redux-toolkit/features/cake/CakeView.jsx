import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {ordered, restocked} from './cakeSlice'


export const CakeView = () => {
  const [restockNum, setRestockNum] = useState(1);
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  return (
    <div >
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input type="text" value={restockNum} placeholder="Restock Amount" onChange={(e)=>setRestockNum(parseInt(e.target.value))}/>
      <button onClick={()=>dispatch(ordered())}>Order</button>
      <button onClick={()=>dispatch(restocked(restockNum))}>Restock</button>
    </div>
  );
};

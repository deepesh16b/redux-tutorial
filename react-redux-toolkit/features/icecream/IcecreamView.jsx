import React , {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ordered, restocked} from './icecreamSlice'


export const IcecreamsView = () => {
  const [restockNum, setRestockNum] = useState(1);
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state)=>{
    return state.icecream.numOfIcecream;
  });
  return <div>
    <h2>Number of Icecreams - {numOfIcecream}</h2>
    <input type="text" value={restockNum} placeholder="Restock Amount" onChange={(e)=>setRestockNum(parseInt(e.target.value))}/>
    <button onClick={()=>dispatch(ordered())}>Order</button>
      <button onClick={()=>dispatch(restocked(restockNum))}>Restock</button>
  </div>;
};

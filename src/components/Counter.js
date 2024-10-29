import { useSelector,useDispatch } from "react-redux";
import { counterSliceActions } from "../store/store";

const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)
  return (
    <>
      <button onClick={()=>dispatch(counterSliceActions.increment())} >+</button>
      <h2>Count: {count}</h2>
      <button onClick={()=>dispatch(counterSliceActions.decrement())} >-</button>
    </>
  )
}

export default Counter

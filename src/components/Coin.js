import { useSelector } from "react-redux"

const Coin = () => {
    const coin=useSelector((state)=>state.counter.count)
  return (
    <>
      <h2>Coin : {coin}</h2>
    </>
  )
}

export default Coin

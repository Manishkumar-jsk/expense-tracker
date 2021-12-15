import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transaction => (transaction.amount));
  const total = amount.reduce((total,value) => (total + value),0).toFixed(2);
  console.log(amount)
  console.log(total)
    return ( 
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
     );
}
 
export default Balance;
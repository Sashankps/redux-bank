import store from "../../store";
import { createCustomer } from "./customerSlice";

// store.dispatch(createCustomer('Sashank', '91')); 
// console.log(store.getState());
// const name = store.getState().customer.fullName; 
function Customer() {
  return <h2>👋 Welcome </h2>;
}

export default Customer;

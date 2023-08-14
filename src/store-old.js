// import {combineReducers, createStore} from "redux";
//
// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: ''
// }
// const initialStateCustomer = {
//   fullName: '',
//   nationalID: '',
//   createdAt: ''
// }
//
// function accountReducer(state = initialStateAccount, {type, payload}) {
//   switch (type) {
//     case 'account/deposit':
//       return {...state, balance: state.balance + payload}
//     case 'account/withdraw':
//       return {...state, balance: state.balance - payload}
//     case 'account/requestLoan':
//       if (state.loan > 0) return state;
//       return {...state, balance: state.balance + payload.amount, loan: payload.amount, loanPurpose: payload.purpose}
//     case 'account/payLoan':
//       return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan}
//     default:
//       return state
//   }
// }
//
// function customerReducer(state = initialStateCustomer, {type, payload}) {
//   switch (type) {
//     case 'customer/createCustomer':
//       return {...state, fullName: payload.fullName, nationalID: payload.nationalID, createdAt: payload.createdAt}
//     case 'customer/updateName':
//       return {...state, fullName: payload}
//     default:
//       return state
//   }
// }
//
// const rootReducer = combineReducers({'account':accountReducer, 'customer':customerReducer})
// const store = createStore(rootReducer)
//
// store.dispatch({type: 'account/deposit', payload: 500})
// console.log(store.getState());
// store.dispatch({type: 'account/withdraw', payload: 200})
// console.log(store.getState());
// store.dispatch({type: 'account/requestLoan', payload: {amount: 1000, purpose: 'buy a car'}})
// console.log(store.getState());
// store.dispatch({type: 'account/payLoan'})
// console.log(store.getState());
//
// function deposit(amount) {
//   return ({type: 'account/deposit', payload: amount})
// }
//
// function withdraw(amount) {
//   return ({type: 'account/withdraw', payload: amount})
// }
//
// function requestLoan(amount, purpose) {
//   return ({type: 'account/requestLoan', payload: {amount, purpose}})
// }
//
// function payLoan() {
//   return ({type: 'account/payLoan'})
// }
//
// store.dispatch(deposit(222))
// console.log(store.getState());
// store.dispatch(withdraw(111))
// console.log(store.getState());
// store.dispatch(requestLoan(1000, 'buy trousers'))
// console.log(store.getState());
// store.dispatch(payLoan())
// console.log(store.getState());
//
// function createCustomer(fullName, nationalID) {
//   return {type: 'customer/createCustomer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}}
// }
//
// function updateName(fullName) {
//   return {type: 'customer/updateName', payload: fullName}
// }
//
// store.dispatch(createCustomer('Roman Parkhomenko','MA029384'))
// console.log(store.getState());
//
// store.dispatch(updateName('Jonas Schmedtmann'))
// console.log(store.getState());
//
// export {deposit, withdraw, requestLoan, payLoan, createCustomer,updateName}
// export default store
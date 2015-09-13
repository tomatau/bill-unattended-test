import axios from 'axios';

export const RECEIVE_BILL = 'RECEIVE_BILL';

const billUrl = 'https://still-scrubland-9880.herokuapp.com/bill.json';
export const fetchBill = ()=>{
  return async(dispatch) => {
    // console.log(dispatch)
    const { data:bill } = await axios.get(billUrl)
    dispatch({
      bill,
      type: RECEIVE_BILL
    })
  }
}
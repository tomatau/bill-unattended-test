import axios from 'axios';

const billUrl = 'https://still-scrubland-9880.herokuapp.com/bill.json';

export const getBill = async()=>{
  const { data:bill } = await axios.get(billUrl)
  console.log(bill)
}
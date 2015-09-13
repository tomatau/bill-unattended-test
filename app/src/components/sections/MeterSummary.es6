import React from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import Meter from 'src/components/elements/Meter';
import bill from '../bill';
import {twoDP} from 'src/utils';

const Box = ({ color })=>
  <div style={{
    backgroundColor: color,
    width: 20,
    height: 20,
    display:' inline-block',
    marginRight: 10
  }} />

@connect(({bill})=>{
  return {
    package: bill.package,
    callCharges: bill.callCharges,
    skyStore: bill.skyStore,
    total: bill.total,
  }
})
export class MeterSummary extends React.Component {

  // shouldComponentUpdate(){
  //   return false;
  // }

  render() {
    console.log(bill)
    const { style, total } = this.props;
    console.log(total)
    return (
      <div className='hidden-sm' style={{
        ...style, position: 'absolute'
      }}>
        <div className="meter__container"
          style={{
            display: 'inline-block',
            width: 225, margin: '0 auto'
          }}>
          <Meter
            width={200}
            height={200}
            series={[
              { value: bill.package.total, color: '#CE7112' },
              { value: bill.callCharges.total, color: '#519251' },
              { value: bill.skyStore.total, color: '#2c4985' },
            ]}
          />
        </div>
        <div className="meter__big" style={{
          display: 'inline-block',
          position: 'relative',
          top: 36,
          verticalAlign: 'top',
          marginLeft: -160,
          color: 'white',
        }}>
          <h2 style={{
            fontWeight: 'lighter',
          }}>
            <Box color='#CE7112' />
            <span style={{ display: 'inline-block'}}>
              £{twoDP(Number(bill.package.total))} Packages</span>
            <br/>
            <Box color='#519251' />
            <span style={{ display: 'inline-block'}}>
              £{twoDP(Number(bill.callCharges.total))} Call Charges
            </span>
            <br/>
            <Box color='#2c4985' />
            <span style={{ display: 'inline-block'}}>
              £{twoDP(Number(bill.skyStore.total))} Sky Store
            </span>
            <br/>
          </h2>
        </div>
      </div>
    );
  }
}

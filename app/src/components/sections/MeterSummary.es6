import React from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import Meter from 'src/components/elements/Meter';
import bill from '../bill';
import {twoDP} from 'src/utils';

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
            <Box /> £{twoDP(Number(bill.package.total))} Packages <br/>
            <Box /> £{twoDP(Number(bill.callCharges.total))} Call Charges<br/>
            <Box /> £{twoDP(Number(bill.skyStore.total))} Sky Store<br/>
          </h2>
        </div>
      </div>
    );
  }
}

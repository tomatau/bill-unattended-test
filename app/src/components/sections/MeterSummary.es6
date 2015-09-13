import React from 'react';
import Meter from 'src/components/elements/Meter';
import bill from '../bill';

export class MeterSummary extends React.Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
    console.log(bill)
    return (
      <div>
        <Meter
          width={144}
          height={188}
          series={[
            { value: bill.package.total, color: '#CE7112' },
            { value: bill.callCharges.total, color: '#519251' },
            { value: bill.skyStore.total, color: '#2c4985' },
          ]}
        />
      </div>
    );
  }
}

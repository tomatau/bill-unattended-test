import React from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import Meter from 'src/components/elements/Meter';
import bill from '../bill';
import {twoDP} from 'src/utils';

const Box = ({ color })=>
  <div style={{
    backgroundColor: color,
    width: 14,
    height: 14,
    display:' inline-block',
    marginRight: 10
  }} />


function easeOutBounce(t, c=1, b=0, d=1) {
  if ((t/=d) < (1/2.75)) {
    return c*(7.5625*t*t) + b;
  } else if (t < (2/2.75)) {
    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  } else if (t < (2.5/2.75)) {
    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  } else {
    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  }
}

@connect(({bill})=>{
  return {
    package: bill.package,
    callCharges: bill.callCharges,
    skyStore: bill.skyStore,
    total: bill.total,
  }
})
export class MeterSummary extends React.Component {

  state = {
    percent: 0
  }

  render() {
    const { style, total } = this.props;
    const { percent } = this.state;
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
            percent={easeOutBounce(percent)}
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
          marginLeft: -170,
          color: 'white',
        }}>
          <h2 style={{
            fontWeight: 'lighter',
          }}>
            <Box color='#CE7112' />
            <small style={{ display: 'inline-block'}}>
              <span style={{ marginRight: 5 }}>
                £{twoDP(Number(bill.package.total))}
              </span> Packages
            </small>
            <br/>
            <Box color='#519251' />
            <small style={{ display: 'inline-block'}}>
              <span style={{ marginRight: 5 }}>
                £{twoDP(Number(bill.callCharges.total))}
              </span> Call Charges
            </small>
            <br/>
            <Box color='#2c4985' />
            <small style={{ display: 'inline-block'}}>
              <span style={{ marginRight: 5 }}>
                £{twoDP(Number(bill.skyStore.total))}
              </span> Sky Store
            </small>
            <br/>
          </h2>
        </div>
      </div>
    );
  }

  componentDidMount(){
    var start = null;
    var duration = 1500;
    const step = (timestamp) => {
      if (start == null) start = timestamp;
      let progress = timestamp - start;
      if (progress < duration) {
        this.setState({
          percent: progress / duration
        })
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }
}

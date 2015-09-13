import React, {PropTypes} from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import * as Section from 'src/components/elements/Section';
import { CallsTable } from 'src/components/elements/CallsTable';
import {twoDP} from 'src/utils';

import Loader from 'src/components/elements/Loader';

@connect(({bill})=>{
  return {
    callCharges: bill.callCharges
  }
})
export class CallCharges extends React.Component {

  static propTypes = {
    callCharges: PropTypes.object
  }

  render() {
    const { style, callCharges:{total, calls} } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#519251'
          title='Call Charges'
          subtitle={total
            ? `£${twoDP(total)}`
            : <Loader />}
        />
        <Section.SubHeading
          color='#91C791'
          title='Calls'
        />
        {!isEmpty(calls)
          ? <CallsTable
              calls={calls}
            />
          : <Loader />
        }
      </div>
    );
  }
}

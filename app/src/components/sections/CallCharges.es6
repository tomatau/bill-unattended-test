import React from 'react';
import * as Section from 'src/components/elements/Section';
import { CallsTable } from 'src/components/sections/CallsTable';
import {twoDP} from 'src/utils';
import bill from '../bill';

export class CallCharges extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#519251'
          title='Call Charges'
          total={twoDP(bill.callCharges.total)}
        />
        <Section.SubHeading
          color='#91C791'
          title='Calls'
        />
        <CallsTable />
      </div>
    );
  }
}

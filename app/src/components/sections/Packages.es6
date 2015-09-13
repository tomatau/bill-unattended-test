import React from 'react';
import * as Section from 'src/components/elements/Section';
import { SubscriptionsTable } from 'src/components/sections/SubscriptionsTable';
import {twoDP} from 'src/utils';
import bill from '../bill';

export class Packages extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#CE7112'
          title='Packages'
          total={twoDP(bill.package.total)}
        />
        <Section.SubHeading
          color='#EFAB65'
          title='Subscriptions'
        />
        <SubscriptionsTable />
      </div>
    );
  }
}

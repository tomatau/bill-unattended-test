import React from 'react';
import * as Section from 'src/components/elements/Section';
import { RentalsTable } from 'src/components/sections/RentalsTable';
import { BuyAndKeepTable } from 'src/components/sections/BuyAndKeepTable';

import bill from '../bill';

export class SkyStore extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#2c4985'
          title='Sky Store'
          total={bill.skyStore.total}
        />
        <Section.SubHeading
          color='#83B9E8'
          title='Rentals'
        />
        <RentalsTable />
        <Section.SubHeading
          color='#83B9E8'
          title='Buy and Keep'
        />
        <BuyAndKeepTable />
      </div>
    );
  }
}

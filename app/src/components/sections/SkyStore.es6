import React, {PropTypes} from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import * as Section from 'src/components/elements/Section';
import { RentalsTable } from 'src/components/elements/RentalsTable';
import { BuyAndKeepTable } from 'src/components/elements/BuyAndKeepTable';
import {twoDP} from 'src/utils';

import Loader from 'src/components/elements/Loader';

@connect(({bill})=>{
  return {
    skyStore: bill.skyStore
  }
})
export class SkyStore extends React.Component {

  static propTypes = {
    skyStore: PropTypes.object
  }

  render() {
    const { style, skyStore:{total, rentals, buyAndKeep} } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#2c4985'
          title='Sky Store'
          subtitle={total
            ? `£${twoDP(total)}`
            : <Loader />}
        />
        <Section.SubHeading
          color='#83B9E8'
          title='Rentals'
        />
        {!isEmpty(rentals)
          ? <RentalsTable
              rentals={rentals}
            />
          : <Loader />
        }
        <Section.SubHeading
          color='#83B9E8'
          title='Buy and Keep'
        />
        {!isEmpty(buyAndKeep)
          ? <BuyAndKeepTable
              buyAndKeep={buyAndKeep}
            />
          : <Loader />
        }
      </div>
    );
  }
}

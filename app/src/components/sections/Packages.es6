import React, {PropTypes} from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import * as Section from 'src/components/elements/Section';
import { SubscriptionsTable } from 'src/components/elements/SubscriptionsTable';
import {twoDP} from 'src/utils';

import Loader from 'src/components/elements/Loader';

@connect(({bill})=>{
  return {
    package: bill.package
  }
})
export class Packages extends React.Component {

  static propTypes = {
    package: PropTypes.object
  }

  render() {
    const { style, package:{total, subscriptions} } = this.props;
    return (
      <div style={style}>
        <Section.Heading
          color='#CE7112'
          title='Packages'
          subtitle={total
            ? `£${twoDP(total)}`
            : <Loader />}
        />
        <Section.SubHeading
          color='#EFAB65'
          title='Subscriptions'
        />
        {!isEmpty(subscriptions)
          ? <SubscriptionsTable
              subscriptions={subscriptions}
            />
          : <Loader />
        }
      </div>
    );
  }
}

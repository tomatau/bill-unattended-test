import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as Section from 'src/components/elements/Section';
import { SubscriptionsTable } from 'src/components/elements/SubscriptionsTable';

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
          total={total || 0}
        />
        <Section.SubHeading
          color='#EFAB65'
          title='Subscriptions'
        />
        <SubscriptionsTable
          subscriptions={subscriptions}
        />
      </div>
    );
  }
}

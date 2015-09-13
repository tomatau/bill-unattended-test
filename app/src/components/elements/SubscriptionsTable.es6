import React, {PropTypes} from 'react';
import capitalize from 'lodash/string/capitalize';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import {twoDP} from 'src/utils';

export class SubscriptionsTable extends React.Component {

  static propTypes = {
    subscriptions: PropTypes.array
  }

  render() {
    const { subscriptions } = this.props;
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Type', width: '37%', getValue: (item)=>capitalize(item.type) },
          { header: 'Name', width: '37%', getValue: (item)=>item.name },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${twoDP(item.cost)}` },
        ]}
        items={subscriptions}
      />
    );
  }
}

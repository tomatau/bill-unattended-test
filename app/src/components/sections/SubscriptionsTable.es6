import React from 'react';
import capitalize from 'lodash/string/capitalize';
import * as Pure from 'src/components/elements/Pure';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import bill from '../bill';
import {twoDP} from 'src/utils';

export class SubscriptionsTable extends React.Component {
  render() {
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Type', width: '37%', getValue: (item)=>capitalize(item.type) },
          { header: 'Name', width: '37%', getValue: (item)=>item.name },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${twoDP(item.cost)}` },
        ]}
        items={bill.package.subscriptions}
      />
    );
  }
}

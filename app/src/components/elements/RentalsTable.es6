import React, {PropTypes} from 'react';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import {twoDP} from 'src/utils';

export class RentalsTable extends React.Component {

  static propTypes = {
    rentals: PropTypes.array
  }

  render() {
    const { rentals } = this.props;
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Title', width: '74%', getValue: (item)=>item.title },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${twoDP(item.cost)}` },
        ]}
        items={rentals}
      />
    );
  }
}

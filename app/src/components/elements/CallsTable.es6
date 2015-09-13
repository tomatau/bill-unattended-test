import React, {PropTypes} from 'react';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import {twoDP} from 'src/utils';

export class CallsTable extends React.Component {

  static propTypes = {
    calls: PropTypes.array
  }

  render() {
    const { calls } = this.props;
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Called', width: '37%', getValue: (item)=>item.called },
          { header: 'Duration', width: '37%', getValue: (item)=>item.duration },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${twoDP(item.cost)}` },
        ]}
        items={calls}
      />
    );
  }
}

import React, {PropTypes} from 'react';
import * as Pure from 'src/components/elements/Pure';

const
  headerHeight = 34

const
  containerStyles = { width: '100%', height: '100%', position: 'relative', paddingTop: headerHeight }
, tableBackgroundStyles = {
    height: headerHeight,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  }
, tableInnerStyles = { overflowX: 'hidden', overflowY: 'auto' }
, tableStyles = { width: '100%', overflowX: 'hidden', overflowY: 'auto' }
, fullWidth = { width: '100%' }
, noPadding = { padding: 0 }
, thInnerStyles = {
  position: 'absolute',
  top: 0,
  lineHeight: `calc(${headerHeight}px - 1em)`,
  padding: '0.5em 1em',
}

export class FixedHeaderTable extends React.Component {

  static propTypes = {
    backgroundColor: PropTypes.string,
    maxHeight: PropTypes.number,
    columns: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.node.isRequired,
      getValue: PropTypes.func.isRequired,
      width: PropTypes.string.isRequired,
    })),
    items: PropTypes.array
  }

  static defaultProps = {
    maxHeight: 300,
    backgroundColor: '#e0e0e0',
    columns: [],
    items: []
  }

  render() {
    const { columns, items, backgroundColor, maxHeight } = this.props;
    return (
      <div style={containerStyles}>
        <div className="Table__header-background" style={{
          ...tableBackgroundStyles,
          backgroundColor,
        }} />
        <div className="Table--inner" style={{ ...tableInnerStyles, maxHeight }}>
          <Pure.Table style={tableStyles} cellSpacing='0'>
            <thead>
              <tr style={fullWidth}>
                {columns.map((col, i) =>
                  <th style={noPadding} key={i}>
                    <div style={{
                      ...thInnerStyles,
                      width: col.width,
                    }}>
                      {col.header}
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) =>
                <tr key={i} style={fullWidth}>
                  {columns.map((col, i) =>
                    <td key={i} style={{ width: col.width }}>
                      {col.getValue(item)}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </Pure.Table>
        </div>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import Meter from 'src/Meter';

console.log(process.env.NODE_ENV)

var Hello = ({who}) => (
  <div>Hello {who}</div>
);

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <Meter
            width={144}
            height={192}
            series={[
              {color: 'green', value: 22},
              {color: 'orange', value: 98},
              {color: 'blue', value: 30}
            ]}
          />
        </div>
        <div style={{
          display: 'inline-block',
          position: 'relative',
          top: 56,
          verticalAlign: 'top',
          marginLeft: -70
        }}>
          <h2>Something</h2>
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <MyComponent />, document.getElementById('app-container')
);
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
      <Meter
        width={144}
        height={192}
        total={100}
        series={[
          {color: 'green', value: 22},
          {color: 'orange', value: 48},
          {color: 'blue', value: 30}
        ]}
      />
    );
  }
};

ReactDOM.render(
  <MyComponent />, document.getElementById('app-container')
);
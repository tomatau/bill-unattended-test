import React from 'react';
import ReactDOM from 'react-dom';

console.log(process.env.NODE_ENV)

var Hello = ({who}) => (
  <div>Hello {who}</div>
);

class MyComponent extends React.Component {
  render() {
    return <Hello who="world" />;
  }
};

ReactDOM.render(
  <MyComponent />, document.getElementById('app-container')
);
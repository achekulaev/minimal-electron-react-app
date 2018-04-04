const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render () {
    return (
      <div><h1>Hello, React in Electron!</h1></div>
    )
  }
}

// Need to include render here for Babel to transcript JSX
ReactDOM.render(<App />, document.getElementById('root'));

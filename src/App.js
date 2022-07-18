import React, { createContext } from 'react';
const { Provider, Consumer } = createContext()

function ComA () {
  return (
    <div>
      <p>this is ComponentA</p>
      <ComC />
    </div>
  )
}

function ComC () {
  return (
    <div>
      <p>this is ComponentA</p>
      <Consumer>{ value => value}</Consumer>
    </div>
  )
}
class App extends React.Component {
  state = {
    msg: 'this is msg'
  }
  render() {
    return (
      <Provider value={this.state.msg}>
        <div>
          <p>App</p>
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App;

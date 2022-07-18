import React from 'react';
import { useWindowScroll } from './hooks/useWindowScroll'

function App () {
  const [h] = useWindowScroll()
  return (
    <div style={{height: '2000px'}}>app--{ h }</div>
  )
}

export default App;

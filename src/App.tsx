import { Router } from '@reach/router';
import React from 'react';
import Counter from './pages/Counter'

const App: React.FC = () => {
  return (
    <Router>
      <Counter path='/count'/>
    </Router>
  )
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'

import './App.css'

// Replace your code here
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

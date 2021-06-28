import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AppRoute from './components/AppRoute'
import routes from './config/routes'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <AppRoute
            key={route.path}
            path={route.path}
            component={route.component}
            isProtected={route.isProtected}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App

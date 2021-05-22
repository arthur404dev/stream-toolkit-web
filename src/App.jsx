import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Routes from './routes/Routes'

function App() {
  return (
    <Router>
      <Routes />
      {/* <Link to={`/overlay/chat-vertical`}>Chat-Vertical</Link> */}
    </Router>
  )
}

export default App

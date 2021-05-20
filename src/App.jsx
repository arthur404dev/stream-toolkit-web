import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import useMessages from './hooks/useMessages'
import Routes from './Routes'

function App() {
  const [messages, scroll] = useMessages()
  return (
    <Router>
      <Routes messageState={[messages, scroll]} />
      {/* <Link to={`/overlay/chat-vertical`}>Chat-Vertical</Link> */}
    </Router>
  )
}

export default App

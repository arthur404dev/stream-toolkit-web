import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

import { useMessages, useStreamData } from './hooks'

function App() {
  const [messages, scroll] = useMessages()
  const [streamData] = useStreamData()
  return (
    <Router>
      <Routes messageState={{ messages, scroll }} />
    </Router>
  )
}

export default App

import './App.css'
import useMessages from './hooks/useMessages'
import Routes from './Routes'

function App() {
  const [messages, scroll] = useMessages()
  return <Routes messageState={[messages, scroll]} />
}

export default App

import "./App.css";
import useMessages from "./hooks/useMessages";
import Message from './components/Message'

function App() {
  const [messages, scroll] = useMessages();
  return (
    <>
      <main className="bg-transparent w-full h-full flex-col">
        {messages.map((message) => (
        <Message key={message.id} payload={message} />
        ))}
      <div ref={scroll}/>
      </main>
    </>
  );
}

export default App; 
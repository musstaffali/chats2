import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="7dc8d568-35e0-4f46-95b2-b7ddedb481d2"
            userName="mamusstaffali"
            userSecret="cat"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;
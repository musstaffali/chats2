import MessageForm from './MessageForm';
import MyMessage from './MessageForm';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

   const chat = chats && chats[activeChat];

   const renderMessages = () => {
       const keys = Object.keys
   }

    return (
        <div>
            ChatFeed
        </div>
    )
}



export default ChatFeed;
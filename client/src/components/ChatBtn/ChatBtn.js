import { Link } from 'react-router-dom';

const ChatBtn = () => {
  return (
    <button className="btn btn-primary ms-2">
      <Link to="/chat">Chat</Link>
    </button>
  )
}

export default ChatBtn;
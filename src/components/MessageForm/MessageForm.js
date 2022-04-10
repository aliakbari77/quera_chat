import React, {useState} from 'react';
import axios from 'axios'
import './MessageForm.css';
import MessageList from '../MessageList/MessageList';

function MessageForm({ onMessageSend }) {
  let [message, setMessage] = useState('')
  let [messages, setMessages] = useState([])
  
  async function handleFormSubmit(e) {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <MessageList messages={messages}/>
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          id='message'
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          autoFocus
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
    </React.Fragment>
  );
}

export default MessageForm;

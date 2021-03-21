import React from 'react';
import './Messages.scss';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

function Messages({ messages, name }) {
  return (
    <ScrollToBottom
      debug={false}
      debounce={50}
      className="Messages"
    >
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;

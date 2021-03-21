import React from 'react';
import './Input.scss';

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="Input">
      <input
        className="Input-input"
        value={message}
        type="text"
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
      />
      <button
        className="Input-sendButton"
        type="submit"
        onClick={(event) => sendMessage(event)}
      >
        Send
      </button>
    </form>
  );
}

export default Input;

import React from 'react';
import './Message.scss';

import ReactEmoji from 'react-emoji';

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="Message justifyEnd">
      <p className="Message-sentText pr-10">{user}</p>
      <div className="Message-messageBox backgroundBlue">
        <p className="Message-messageBox-messageText colorWhite">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="Message justifyStart">
      <div className="Message-messageBox backgroundLight">
        <p className="Message-messageBox-messageText colorDark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="Message-sentText pl-10">{user}</p>
    </div>
  );
}

export default Message;

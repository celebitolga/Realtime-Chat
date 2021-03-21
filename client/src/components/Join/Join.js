import React, { useState } from 'react';
import './Join.scss';

import { Link } from 'react-router-dom';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <div className="Join">
      <div className="Join-container">
        <h1 className="Join-title">Join</h1>
        <div className="Join-inputs mt-20">
          <input
            className="Join-inputs-input"
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="Join-inputs">
          <input
            className="Join-inputs-input mt-20"
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room) && event.preventDefault()}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="Join-button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;

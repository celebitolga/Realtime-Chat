import React from 'react';
import './OnlineUsers.scss';

function OnlineUsers({ users }) {

  return (
    <div className="OnlineUsers">
      <h2 className="OnlineUsers-title">Online users in room</h2>
      <div className="OnlineUsers-users mt-10">
        {users.map((user) => (
          <span key={`user-${user.id}`} className="OnlineUsers-users-user">
            {user.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default OnlineUsers;

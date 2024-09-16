// src/User.jsx
import React from 'react';

// Bileşen adı PascalCase olmalı: "User"
function User({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
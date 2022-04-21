import './styles.scss';

import React from 'react';

export default function ChatTypingLoader() {
  return (
    <div className="d-flex align-items-center typing">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

import './YellowButton.scss';

import React from 'react';

interface YellowButtonProps {
  name: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const YellowButton = ({ name, type = 'button', onClick }: YellowButtonProps) => {
  return (
    <button type={type} className="yellow-button" onClick={onClick}>
      {name}
    </button>
  );
};

export default YellowButton;

import './YellowButton.scss';

import React from 'react';

interface YellowButtonProps {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const YellowButton = ({ name, onClick }: YellowButtonProps) => {
  return (
    <button className="yellow-button" onClick={onClick}>
      {name}
    </button>
  );
};

export default YellowButton;

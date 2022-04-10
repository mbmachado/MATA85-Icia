import React from 'react';

import { AuthContext } from '.';

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

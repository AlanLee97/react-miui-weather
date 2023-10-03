import { createContext } from 'react';

const contextValue = {
  scrollY: 0
};

const AppContext = createContext(contextValue);
export default AppContext;

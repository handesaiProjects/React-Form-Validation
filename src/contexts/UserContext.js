import { createContext } from 'react';

// Create a context for user data
const UserContext = createContext({
  user: { name: '' }, // Default value
  setUser: () => {}   // Default function
});

export { UserContext };

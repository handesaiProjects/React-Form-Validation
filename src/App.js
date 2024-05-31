import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { UserContext } from './contexts/UserContext';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState({ name: '' });

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <div className="App">
        <Header />
        <Form />
      </div>
    </UserContext.Provider>
  );
};

export default App;
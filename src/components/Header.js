import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { MdPerson } from 'react-icons/md'; // Assuming Material Design Icons are used
import '../styles/Header.css';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="Header">
      <h1>
        <MdPerson style={{ color: 'green', fontSize: '30px' }} />
        {' '}Welcome, {user.name ? user.name : 'Guest'}
      </h1>
    </header>
  );
};

export default Header;
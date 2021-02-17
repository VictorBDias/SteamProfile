import React from 'react';
import { useBetween } from 'use-between';

// CUSTOM IMPORTS
import { Container } from './styles';
// APIS
import api from '~/apis/userApi';

export default function UserInfo() {
  // STATES
  const useUserState = () => {
    const [user, setUser] = React.useState();
    return {
      user,
      setUser,
    };
  };

  const { user, setUser } = useBetween(useUserState);

  // FUNCTIONS

  return (
    <Container>
      <h1>{user}</h1>
      {/* Avatar */}
      {/* textos retorno API */}
    </Container>
  );
}

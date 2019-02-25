import React, {useContext} from 'react';
import {signOut} from '../../services/auth';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";
import {AuthContext} from "./Auth";

const Header = () => {
  const {user, setCurrentUser} = useContext(AuthContext);

  const logout = async () => {
    await signOut();
    setCurrentUser(null);
  };

  return (
      <HeaderContainer>
        <div>Burger & Pizza Places for <UserName>{user.name}</UserName></div>
        <StyledLink to={'/'} onClick={logout}>Logout</StyledLink>
      </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;  
  margin-bottom: 15px;
  padding: 15px 25px;
`;

const UserName = styled.span`
  color: mediumpurple;
`;

export default Header;

import React from 'react';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
  const {logOut} = useAuth();
  const {user} = useAuth();

  return (
      <HeaderContainer>
        <div>Burger & Pizza Places for <UserName>{user.name}</UserName></div>
        <StyledLink to={'/'} onClick={logOut}>Logout</StyledLink>
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

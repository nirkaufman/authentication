import React from 'react';
import {StyledLink} from "../shared/StyledLink";
import {PageContainer} from "../shared/Layout";

const Home = () => {
  return (
      <PageContainer>
        <h1>Burger & Pizza Places</h1>
        <StyledLink to={'/login'}>log-in</StyledLink>
        <StyledLink to={'/register'}>register</StyledLink>
      </PageContainer>
  );
};

export default Home;
import React from 'react';
import {PageContainer} from "../shared/Layout";
import {useResource} from "../../hooks/useResource";
import PlaceCard from "../shared/PlaceCard";
import {StyledLink} from "../shared/StyledLink";

const Pizza = () => {
  const pizza = useResource({path: 'pizza'});

  return (
        <PageContainer>
          <h1>Pizza Places</h1>
          <StyledLink to={"/burger"}>I want burger</StyledLink>
          {pizza.map(place => <PlaceCard key={place.id} place={place}/>)}
        </PageContainer>
  );
};

export default Pizza;

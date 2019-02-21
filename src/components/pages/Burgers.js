import React from 'react';
import {PageContainer} from "../shared/Layout";
import {useResource} from "../../hooks/useResource";
import PlaceCard from "../shared/PlaceCard";
import {StyledLink} from "../shared/StyledLink";

const Burgers = () => {
  const burgers = useResource({path: 'burgers'});

  return (
        <PageContainer>
          <h1>Burger Places</h1>
          <StyledLink to={"/pizza"}>I want pizza</StyledLink>
          {burgers.map(place => <PlaceCard key={place.id} place={place}/>)}
        </PageContainer>
  );
};

export default Burgers;

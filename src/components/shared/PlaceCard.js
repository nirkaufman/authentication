import React from 'react';
import styled from "@emotion/styled";

const PlaceCard = ({place}) => {
  return (
        <CardContainer>
          <CardTitle>{place.name}</CardTitle>
          <CardAddress>{place.address}</CardAddress>
          <h4>{place.phone}</h4>
          <p>{place.description}</p>
        </CardContainer>
  );
};

const CardContainer = styled.div`
  display: inline-block;
  width: 400px;  
  border: 1px solid lightpink;
  padding:10px;
  margin: 10px;
`;

const CardTitle = styled.h3`    
  margin: 2px;
`;

const CardAddress = styled.h6`
  font-style: italic;
  margin: 2px;  
`;

export default PlaceCard;
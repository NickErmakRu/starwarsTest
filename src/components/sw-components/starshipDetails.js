import React from 'react';

import ItemDetails, {Record} from '../itemDetails';

import { SwapiServiceConsumer } from '../swapi-service-context/swapiServiceContext';

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage}
            >
              <Record field='model' label='Model' />
              <Record field='length' label='Length' />
              <Record field='crew' label='Crew' />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export default StarshipDetails;
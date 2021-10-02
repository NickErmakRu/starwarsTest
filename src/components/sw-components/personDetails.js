import React from 'react';

import ItemDetails, {Record} from '../itemDetails';

import { SwapiServiceConsumer } from '../swapi-service-context/swapiServiceContext';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}
            >
              <Record field='gender' label='Gender' />
              <Record field='birthYear' label='Birth Year' />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export default PersonDetails;
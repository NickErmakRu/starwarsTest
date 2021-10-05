import React from 'react';
import ItemDetails, {Record} from '../itemDetails';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='Gender:' />
      <Record field='birthYear' label='Birth Year:' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);
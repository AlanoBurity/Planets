import React from 'react';
import PropTypes from 'prop-types';
import Planets from '../data/planets';

class PlanetCard extends React.Component {
  render() {
    return (<div data-testid="planet-card">
      { Planets.map((planets) => planets.name)}
    </div>);
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;

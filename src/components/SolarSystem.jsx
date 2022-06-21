import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

function createCards({ name, image }) {
  return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
}

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="Planets">
          {
            Planets.map(createCards)
          }
        </section>
      </div>);
  }
}
export default SolarSystem;

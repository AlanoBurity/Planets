import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section>
          {
            missions.map((missao) => (<MissionCard
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              key={ missao.name }
            />))
          }
        </section>
      </div>);
  }
}
export default Missions;

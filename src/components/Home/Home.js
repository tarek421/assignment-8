import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeams(data.teams.slice(0, 21)));
    },[]);
    const sectionStyle = {
        width: '100%',
        height: '250px',
        backgroundRepeat:'no-repeat',
        opacity:'0.75',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('https://www.thesportsdb.com/images/media/team/stadium/rxywpv1420401569.jpg')`
      };
    return (
        <>
        <div style={{background:'#333'}}>
            <div className='container-fluid' style={sectionStyle}>
                <h2 style={{position:'relative', top:'100px'}} className='text-light text-center'>Championship Series teams</h2>
            </div>
        </div>
        <div className='container mt-5'>
            <div className="row">
                {
                    teams.map(team => <Teams team={team} key={team.idTeam}></Teams>)
                }
            </div>
        </div>
        </>
    );
};

export default Home;
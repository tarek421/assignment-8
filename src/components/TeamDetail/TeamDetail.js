import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../img/male.png';
import female from '../../img/female.png';
import './TeamsDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFlag, faFutbol, faMapMarker, faMarsStroke } from '@fortawesome/free-solid-svg-icons';


const TeamDetail = () => {
    const [team, setTeam] = useState([]);
    let { idTeam } = useParams();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam]);
    // Destucture Coad
    const { strAlternate, strCountry, intFormedYear, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube, strStadiumThumb, strTeamBadge } = team;

    // Conditional Oparetor
    let genders;
    if(male){
        genders = <img src={male} alt="" /> 
    }else{
        genders = <img src={female} alt="" />
    }

    return (
        <div style={{ backgroundColor: '#060320d9', color: '#fff' }} >
            <div className='container-fluid sectionStyle' style={{backgroundImage: `url(${strStadiumThumb})`}}>
                <img style={{ height: '160px', display: 'flex', margin: 'auto', position: 'relative', top: '40px' }} src={strTeamBadge} alt="" />
            </div>
            <div className='container team mt-5'>
                <div className="row bg-primary rounded">
                    <div className="col-lg-7 col-md-6 col-sm-12 mt-5">
                        <div className='team-detail'>
                            <h2>{strAlternate}</h2>
                            <h6><FontAwesomeIcon icon={faMapMarker} />Founded : {intFormedYear}</h6>
                            <h6><FontAwesomeIcon icon={faFlag} />Country : {strCountry}</h6>
                            <h6><FontAwesomeIcon icon={faFutbol} />Sports Type : {strSport}</h6>
                            <h6><FontAwesomeIcon icon={faMarsStroke} />Gender : {strGender}</h6>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        {genders}
                    </div>
                </div>
                <p style={{ marginTop: '20px' }}>{strDescriptionEN}</p>
            </div>
            <div className='social-icon'>
                <a href={`https://${strFacebook}`}> <FontAwesomeIcon icon={faFacebook}/>  </a>
                <a href={`https://${strTwitter}`}> <FontAwesomeIcon icon={faTwitter} /> </a>
                <a href={`https://${strYoutube}`}> <FontAwesomeIcon icon={faYoutube} /> </a>
            </div>
        </div>
    );
};

export default TeamDetail;
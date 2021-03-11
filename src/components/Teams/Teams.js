import React from 'react';
import './Teams.css';

import { Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Teams = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.team;
    const classes = useStyles();

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 teams container">
            <Card className={classes.root} id='makeStyles-root-3'>
                <CardActionArea>
                    <img src={strTeamBadge} alt=""/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {strTeam}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        Sports type : {strSport}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button style={{margin:"auto"}} as={Link} to={`/team/${idTeam}`} size="small" color="primary">
                    Show Detail
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Teams;
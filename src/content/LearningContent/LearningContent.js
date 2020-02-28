import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
import EmptyState from '../../layout/EmptyState/EmptyState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (

    <div> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            What is Blockchain Technology?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn about the technology behind digital assets. This is what makes 
            cryptocurreincies possible. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/BlockchainContent">
         Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

    <EmptyState
        title="Learning Board"
        description="Learn about the different types of Digital Assets"
        button={
          <Fab className={classes.button} color="secondary" component={Link} to="/" variant="extended">
            <HomeIcon className={classes.buttonIcon} /> HomePage
          </Fab>
        }
      />

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Utility Tokens 
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Learn about tokens like Bitcoin and Ethereum whose tokens function 
      as utilities within their networks. 
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary" component={Link} to="/UtilityContent" variant="extended">
  Learn More
  </Button>
  <Button size="small" color="primary">
  Share
  </Button>
</CardActions>
</Card>

</div>
  );
}
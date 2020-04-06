import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import EmptyState from '../../layout/EmptyState/EmptyState';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

//Check if they are signed in
// LearningContent.propTypes = {
//   classes: PropTypes.object.isRequired,

//   isSignedIn: PropTypes.bool.isRequired,
//   title: PropTypes.string.isRequired
// };


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
            What is Blockchain technology?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn about the technology behind cryptocurrencies and other digital
            assets.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/BlockchainContent">
          Learn More
        </Button>
        <Button size="small" color="primary" component={Link} to="">
          Share
        </Button>
      </CardActions>
    </Card>
    <EmptyState
          icon={<HomeIcon className={classes.emptyStateIcon} color="action" />}
          title="Learning Page"
          description="Learn about different types of cryptocurrencies"
          button={
            <Fab className={classes.button} color="secondary" component={Link} to="/" variant="extended">
              Go back Home
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
            Learn about differnt types of Utility Tokens like Bitcoin and
            Ethereum who's tokens function as utilities on their networks
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/BlockchainContent">
          Learn More
        </Button>
        <Button size="small" color="primary" component={Link} to="/magic">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
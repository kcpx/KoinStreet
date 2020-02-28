import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import EmptyState from '../../layout/EmptyState/EmptyState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class LearningContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { isSignedIn, title } = this.props;

    if (isSignedIn) {
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
      <Button size="small" color="primary" component={Link} to="/UtilityContent">>
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

    return (
      <EmptyState
        icon={<CodeIcon className={classes.emptyStateIcon} color="action" />}
        description="Welcome to"
        title={title}
        button={
          <Fab className={classes.button} color="secondary" href="https://roshanmirajkar.github.io/" rel="noopener noreferrer" target="_blank" variant="extended">
            <GitHubCircleIcon className={classes.buttonIcon} />
            Live Demo
          </Fab>
        }
      />
    );
  }
}

LearningContent.propTypes = {
  classes: PropTypes.object.isRequired,

  isSignedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(LearningContent);
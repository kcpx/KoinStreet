import YouTube from 'react-youtube';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import EmptyState from '../../layout/EmptyState/EmptyState';

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

class BlockchainContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { isSignedIn, title } = this.props;

   
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    if (isSignedIn) {
      
      return (


        <div> 
      
        <YouTube
          videoId="6WG7D47tGb0"
          opts={opts}
          onReady={this._onReady}
        />
  
        
  
      
        <EmptyState
           
            button={
              <Fab className={classes.button} color="secondary" component={Link} to="/some-magic" variant="extended">
                Take Quiz -->
              </Fab>
            }
          />
  
      
  
      </div> 

        
    
      );
    }

    return (
      <div> 
      
      <EmptyState
          icon={<HomeIcon className={classes.emptyStateIcon} color="action" />}
          title="Welcome to KoinStreet"
          description="Blockchain Page"
          button={
            <Fab className={classes.button} color="secondary" component={Link} to="/some-magic" variant="extended">
              Learn about Crypto
            </Fab>
          }
        />
    
      <EmptyState
         
          button={
            <Fab className={classes.button} color="secondary" component={Link} to="/some-magic" variant="extended">
              Take Quiz -->
            </Fab>
          }
        />

    

    </div> 


        
      
    );

    
  }
  
}

BlockchainContent.propTypes = {
  classes: PropTypes.object.isRequired,

  isSignedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(BlockchainContent);
 





 

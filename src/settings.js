/* eslint-disable no-unused-vars */

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import gray from '@material-ui/core/colors/grey';
import blueGray from '@material-ui/core/colors/blueGrey';

/* eslint-enable no-unused-vars */

const settings = {
  title: 'KoinStreet',

  theme: {
    primaryColor: {
      name: 'blue',
      import: blue
    },
    secondaryColor: {
      name: 'red',
      import: red
    },
    type: 'light'
  },

  credentials: {
    firebase: {
    apiKey: "AIzaSyAhNajgMyAhkoGR58LkDUk90WqV8Ni3Upw",
    authDomain: "koinstreet-test.firebaseapp.com",
    databaseURL: "https://koinstreet-test.firebaseio.com",
    projectId: "koinstreet-test",
    storageBucket: "koinstreet-test.appspot.com",
    messagingSenderId: "1018834318903",
    appId: "1:1018834318903:web:a95ff49fc1f54b5efa31b2"
    }
  }
};

export default settings;
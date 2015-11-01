/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SlideMenu = require('react-native-navigation-drawer');
var Menu = require('./menu.js');
GLOBAL.url = "tipp-us-staging.herokuapp.com";
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Home = require('./scenes/home.js');
var Submerchant = require('./scenes/submerchant.js');
var Shows = require('./scenes/shows.js');
var Login = require('./scenes/login.js');
var Signup = require('./scenes/signup.js');
var Edit = require('./scenes/edit.js')

// Unfinished toolbar

// var ToolbarAndroid = require('ToolbarAndroid');

// var tippus = React.createClass({
//   render: function(){
//     return (
//     <View style={styles.container}>
//       <ToolbarAndroid
//         title="Hello"
//         style={styles.toolbar} />
//       <Text style={styles.welcome}>
//       test
//       </Text>
//     </View>
//     )
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'stretch',
//     backgroundColor: "f5cff",
//   },
//   welcome: {
//     fontSize: 28,
//     textAlign: 'center',
//     margin: 10,
//   },
//   toolbar: {
//     height: 56,
//     backgroundColor: '#e9eaed',
//   }
// }); 

var tippus = React.createClass({
  getInitialState: function(fragmentId) {
    return ({ route: 'home' });
  },

  updateFrontView: function() {
    switch (this.state.route) {
      case 'home':
        return <Home />;
      case 'shows':
        return <Shows />;
      case 'banking':
        return <Submerchant />;
      case 'login':
        return <Login />
      case 'signup':
        return <Signup />
      case 'edit':
        return <Edit />;
    }
  },

  routeFrontView: function(fragmentId) {
    this.refs.slideMenu.blockSlideMenu(false);
    this.setState({ route: fragmentId });
  },

  render: function() {
    var fragment = this.updateFrontView();
    return (
      <View style={styles.container}>
        <SlideMenu ref="slideMenu" frontView={fragment}
          routeFrontView={this.routeFrontView} menu={<Menu />}
          slideWay='left' moveFrontView={false} width={200}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('tippus', () => tippus);

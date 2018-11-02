/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import Routes from './src/Routes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/* export default class App extends Component {

  constructor() {

    super()
    this.state = {}
    this.state.customStyles = {
      color:'green'
    }

    setInterval(() => {

      if(this.state.customStyles == 'green') {
        
        this.setState({
          customStyles: {
            color:'blue'
          }
        })
      }else {
        this.setState({
          customStyles: {
            color:'green'
          }
        })
      }
      
    },1000)
  }
  render() {

    const imageInfo = {
      uri: "https://www.google.lk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjfzpGc0YLdAhWRfn0KHZIiCaAQjRx6BAgBEAU&url=https%3A%2F%2Fdeveloper.android.com%2F&psig=AOvVaw0m2cgvgnBNQ5XGgTuFFUOM&ust=1535095152177262"
    }
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyles]}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image src = {imageInfo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); */


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
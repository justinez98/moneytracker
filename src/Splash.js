import React, { Component } from 'react'
import { Image, Text,ImageBackground } from 'react-native'
import {
    Container,
    Header,
    Left,
    Body,
    Button,
    Icon,
    Title,
    Content,
    Form,
    Item,
    Picker,
    Label,
    Input
} from 'native-base'

class Splash extends Component {

  test(){
  setTimeout(()=> {
      this.props.navigation.navigate('Login');
    }, 1500);

  }
  render () {
    console.ignoredYellowBox = ['Warning:'];
    
    return (
        
        <ImageBackground source={require('./img/splash.jpg')} style={{width: '100%', height: '100%'}}>
       {this.test()}

      </ImageBackground>
    )
    } 
}
export default Splash;

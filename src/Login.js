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

class Login extends Component {

  render () {
    console.ignoredYellowBox = ['Warning:'];
    return (
        <ImageBackground source={require('./img/ez.jpg')} style={{width: '100%', height: '100%',}}>
        <Content style={{padding:10}}>
          <Body>
            <Text style={{fontSize:40,fontWeight:'bold',color:'	#ffedcc'}}>
               EZ Money Tracker
            </Text>
            <Image  source={require('./img/logo.png')} style={{width: 200, height: 200}} />
          </Body>

          <Form style={{ margin: 10 }}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input/>
            </Item>
          </Form>

          <Form style={{ margin: 10 }}>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input/>
            </Item>
          </Form>
          <Button
            full
            iconLeft
            rounded
            style={{
              backgroundColor: '#ffedcc',
              padding: 10,
              alignSelf: 'center',
              margin: 5
            }}
            onPress={() =>  this.props.navigation.navigate('Home') }

          >
            <Text style={{ fontWeight: 'bold' }}>Login</Text>
          </Button>
          <Button
            full
            iconLeft
            rounded
            style={{
              backgroundColor: '#ffedcc',
              padding: 10,
              alignSelf: 'center',
              margin: 5
            }}
           
          >
            <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
          </Button>
          </Content>
      </ImageBackground>
    )
    } 
}
export default Login

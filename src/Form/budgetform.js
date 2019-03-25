import React, { Component } from 'react'
import { Image, Text, Alert } from 'react-native'
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

class budgetform extends Component {
  constructor (props) {
    super(props)
    this.state = {
        daily:null,
        monthly:null
    }
  }
  onValueChange2 (value) {
    this.setState({
      category: value
    })
  }

  render () {
    return (
      <Container>
        <Content>
          <Header style={{ backgroundColor: '#ffc04c' }}>
            <Left>
              <Icon
                name='flame'
                style={{ color: '#ffffff' }}
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              />
            </Left>
            <Body>
              <Title style={{ fontFamily: 'Montserrat-Bold' }}>
                Modify Budget
              </Title>
            </Body>
          </Header>
          
        
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Enter Daily Budget
          </Text>
          <Form style={{ margin: 15 }}>
            <Item floatingLabel>
              <Label>Daily Budget</Label>
              <Input
                keyboardType='numeric'
                onChangeText={text => this.setState({ daily: text })}
              />
            </Item>
          </Form>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Enter Monthly Budget
          </Text>
          <Form style={{ margin: 15 }}>
            <Item floatingLabel>
              <Label>Daily Budget</Label>
              <Input
                keyboardType='numeric'
                onChangeText={text => this.setState({ monthly: text })}
              />
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
            onPress={() => Alert.alert('Success', `Succesfully update`,
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
            ],
            { cancelable: false }) }
          >
            <Text style={{ fontWeight: 'bold' }}>Update</Text>
            <Icon name='bulb' style={{ color: '#000' }} />
          </Button>
        </Content>
      </Container>
    )
  }
}
export default budgetform;

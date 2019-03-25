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

class categoryform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: undefined,
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
                Add Category
              </Title>
            </Body>
          </Header>

          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Enter category
          </Text>
          <Form style={{ margin: 15 }}>
            <Item floatingLabel>
              <Label>New Category</Label>
              <Input
              onChangeText={(text) => this.setState({ category: text })}
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
export default categoryform

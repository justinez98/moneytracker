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

class expenseform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: undefined,
      expenses: null
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
                Modify Expenses
              </Title>
            </Body>
          </Header>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Select Category
          </Text>
          <Form style={{ margin: 15 }}>
            <Item picker>
              <Picker
                mode='dropdown'
                iosIcon={<Icon name='arrow-down' />}
                style={{ width: undefined }}
                placeholder='Select your SIM'
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor='#007aff'
                selectedValue={this.state.category}
                onValueChange={value => this.onValueChange2(value)}
              >
                <Picker.Item label='cAt1' value='key0' />
                <Picker.Item label='cat2' value='key1' />
                <Picker.Item label='cat3' value='key2' />
              </Picker>
            </Item>
          </Form>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Enter expenses
          </Text>
          <Form style={{ margin: 15 }}>
            <Item floatingLabel>
              <Label>Expenses For Today</Label>
              <Input
                keyboardType='numeric'
                onChangeText={text => this.setState({ expenses: text })}
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
export default expenseform

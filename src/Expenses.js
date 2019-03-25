import React, { Component } from 'react'
import { Image, Text, TouchableHighlight } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Content
} from 'native-base'

class Expenses extends Component {
  todaydate () {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear() // Current Year.
    var current = `${date}-${month}-${year}`
    return current
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
              <Title style={{ fontFamily: 'Montserrat-Bold' }}>Expenses</Title>
            </Body>
          </Header>
          <Body>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: '#ffedcc' }}
            >
              OVERVIEW
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Total Expenses ~ {this.todaydate()}
            </Text>
            <Text style={{ fontSize: 20 }}>Rm 59.90</Text>
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
              onPress={() => this.props.navigation.navigate('expensesform')}
            >
              <Text style={{ fontWeight: 'bold' }}>Add Expenses</Text>
              <Icon name='add' style={{ color: '#000' }} />
            </Button>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Total Expenses This Month
            </Text>
            <Text style={{ fontSize: 20 }}>Rm 567</Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>
              Expenses History
            </Text>
          </Body>
        </Content>
      </Container>
    )
  }
}
export default Expenses

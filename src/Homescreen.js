import React, { Component } from 'react'
import { Image, Text } from 'react-native'
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
} from 'native-base';




class HomeScreen extends Component {
  
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
              <Title style={{ fontFamily: 'Montserrat-Bold' }}>Home</Title>
            </Body>
          </Header>

          <Card style={{ margin: 10,backgroundColor:'#ffedcc'}}>
            <CardItem style={{backgroundColor:'#ffedcc'}}>
              <Left>
                <Body>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Total Spending Today
                  </Text>
                  <Text note>Date: {this.todaydate()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <Body>
                <Text style={{ fontSize: 30 }}>RM 59.90</Text>
              </Body>
            </CardItem>
            <CardItem />
          </Card >
          <Card style={{ margin: 10,backgroundColor:'#ffedcc'}}>
            <CardItem style={{backgroundColor:'#ffedcc'}}>
              <Left>
                <Body>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Expenses By category
                  </Text>
                  <Text note>April 15, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >


            </CardItem>
            <CardItem />
          </Card>
          <Card style={{ margin: 10 }}>
            <CardItem style={{backgroundColor:'#ffedcc'}}>
              <Left>
                <Body>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Budget Set
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>This month budget- Rm</Text>
                <Text>This month spending- Rm</Text>
                <Text>This month remaining- Rm</Text>
              </Body>
            </CardItem>
            <CardItem />
          </Card>
        </Content>
      </Container>
    )
  }
}
export default HomeScreen

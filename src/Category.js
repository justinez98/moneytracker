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
} from 'native-base'

class Category extends Component {
 
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
              <Title style={{ fontFamily: 'Montserrat-Bold' }}>Category</Title>
            </Body>
          </Header>
          <Button
              iconLeft
              rounded
              style={{
                backgroundColor: '#ffedcc',
                padding: 10,
                alignSelf: 'center',
                margin: 5
              }}
              onPress={() => this.props.navigation.navigate('categoryform')}
            >
              <Text style={{ fontWeight: 'bold' }}>Add Category</Text>
              <Icon name='add' style={{ color: '#000' }} />
            </Button>
          <Card style={{ margin: 15,backgroundColor:'#ffedcc'}}>
            <CardItem style={{backgroundColor:'#ffedcc'}}>
              <Left>
                <Body>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Category 1
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card >
          <Card style={{ margin: 15,backgroundColor:'#ffedcc'}}>
            <CardItem style={{backgroundColor:'#ffedcc'}}>
              <Left>
                <Body>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Category 2
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card >
    
        </Content>
      </Container>
    )
  }
}
export default Category

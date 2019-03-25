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

class Budget extends Component {
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
              <Title style={{ fontFamily: 'Montserrat-Bold' }}>Budget</Title>
            </Body>
          </Header>

          <Body>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: '#ffedcc' }}
            >
              OVERVIEW
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Daily Budget
            </Text>
            <Text style={{ fontSize: 20 }}>Rm 78.90</Text>
           
            <Button
              iconLeft
              rounded
              style={{
                backgroundColor: '#ffedcc',
                padding: 10,
                alignSelf: 'center',
                margin: 5
              }}
              onPress={() => this.props.navigation.navigate('budgetform')}
            >
              <Text style={{ fontWeight: 'bold' }}>Modify Budget</Text>
              <Icon name='settings' style={{ color: '#000' }} />
            </Button>
          </Body>
          <Card style={{ flex:1}}>
              <CardItem style={{ backgroundColor: '#ffedcc' }}>
                <Left>
                  <Body>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Savings
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Total Saving Today:
                    </Text>
                    <Text style={{ fontSize: 15 }}>Rm 3.90</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                      Total Saving This Month:
                    </Text>
                    <Text style={{ fontSize: 15 }}>Rm 16.70</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Image
                      source={{
                        uri:
                          'data:image/png;base64,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'
                      }}
                      style={{ height: 200, width: 200, flex: 1 }}
                    />
                  </Body>
                </Left>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}
export default Budget

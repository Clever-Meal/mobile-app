import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { PermissionProvider } from './context/permissionContext';

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
          <NavigationExample />
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <PermissionProvider >
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="heart" />
              <Text>Offers</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
          </PermissionProvider>
        </Footer>
      </Container>
    );
  }
}

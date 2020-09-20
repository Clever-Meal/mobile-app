import React from 'react';
import { Button as ButtonNative }  from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function Layout( ) {
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Left>
                    <Button 
                        transparent
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) }
                    >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    {/* <Title>Header</Title> */}
                    <ButtonNative
                        title={`Go to ${'ProfileScreen'}`}
                        onPress={() => navigation.navigate('ProfileScreen')}
                    />
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
            <Footer>
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
            </Footer>

        </Container>

    );
}

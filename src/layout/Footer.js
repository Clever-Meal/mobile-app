import React from 'react';
import { Button, Icon, FooterTab, Footer as BaseFooter, Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function Footer({ activeScreen = "Home"}) {
    const navigation = useNavigation();    
    return (
        <BaseFooter>
            <FooterTab>
                <Button 
                    vertical 
                    onPress={() => navigation.navigate('Home')}
                    {...(activeScreen === 'Home' ? {active: true} : {})}
                >
                    <Icon name="home" />
                    <Text>Home</Text>
                </Button>
                <Button 
                    vertical
                    onPress={() => navigation.navigate('Offers')}
                    {...(activeScreen === 'Offers' ? {active: true} : {})}
                >
                    <Icon name="heart" />
                    <Text>Offers</Text>
                </Button>
                <Button 
                    vertical
                    onPress={() => navigation.navigate('Explore')}
                    {...(activeScreen === 'Explore' ? {active: true} : {})}
                >
                    <Icon name="navigate" />
                    <Text>Explore</Text>
                </Button>
                <Button 
                    vertical
                    onPress={() => navigation.navigate('Profile')}
                    {...(activeScreen === 'Profile' ? {active: true} : {})}
                >
                    <Icon name="person" />
                    <Text>Profile</Text>
                </Button>
            </FooterTab>
        </BaseFooter>
    );
}
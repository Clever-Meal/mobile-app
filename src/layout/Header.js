import React from 'react';
import { Button, Icon, Header as BaseHeader, Title, Left, Right, Body } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Header( {title}) {
    const navigation = useNavigation();
    return (
        <BaseHeader>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Icon name="cart"></Icon>
                </Button>
            </Right>
        </BaseHeader>
    );
}
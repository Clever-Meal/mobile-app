import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function ProfileScreen() {
    return (
        <Container>
            <Header title="Profile" />
            <Content>
                <View>
                    <Text>ProfileScreen </Text>
                </View>
            </Content>
            <Footer activeScreen="Profile"/>
        </Container>
    );
}
import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const SettingsScreen = ({
    params,
}) => (
    <Container>
        <Header title="Settings" />
        <Content>
            <View>
                <Text>SettingsScreen </Text>
            </View>
        </Content>
        <Footer />
    </Container>
);

export default SettingsScreen;

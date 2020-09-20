import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const OffersScreen = ({
    params,
}) => (
    <Container>
        <Header title="Offers" />
        <Content>
            <View>
                <Text>OffersScreen </Text>
            </View>
        </Content>
        <Footer activeScreen="Offers" />
    </Container>
);

export default OffersScreen;

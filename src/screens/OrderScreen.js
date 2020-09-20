import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const OrderScreen = ({
    params,
}) => (
    <Container>
        <Header title="Order" />
        <Content>
            <View>
                <Text>OrderScreen </Text>
            </View>
        </Content>
        <Footer />
    </Container>
);

export default OrderScreen;

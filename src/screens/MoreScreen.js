import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const MoreScreen = ({
    params,
}) => (
    <Container>
        <Header title="Settings" />
        <Content>
            <View>
                <Text>MoreScreen </Text>
            </View>
        </Content>
        <Footer />
    </Container>
);

export default MoreScreen;

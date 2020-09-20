import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const ExploreScreen = ({
    params,
}) => (
    <Container>
        <Header title="Explore" />
        <Content>
            <View>
                <Text>ExploreScreen </Text>
            </View>
        </Content>
        <Footer activeScreen="Explore" />
    </Container>
);

export default ExploreScreen;

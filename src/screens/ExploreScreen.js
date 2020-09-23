import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import EstablishmentCard from '../components/EstablishmentCard';
var data = require('./../apis/establishments.json');

const ExploreScreen = ({
    params,
}) => {
    console.log(data.establishments[0]);
    return (
        <Container>
            <Header title="Explore" />
            <Content>
                <View>
                    {
                    data.establishments.map(item => (
                        <EstablishmentCard params={item} />
                    ))}
                </View>
            </Content>
            <Footer activeScreen="Explore" />
        </Container>
    )
}

export default ExploreScreen;

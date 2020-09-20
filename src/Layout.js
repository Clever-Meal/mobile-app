import React from 'react';
import { Container, Content, Text } from 'native-base';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default function Layout() {
    return (
        <Container>
            <Header title="Home" />
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
           <Footer />
        </Container>
    );
}

import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useCart } from './cartContext';

const CartScreen = () => {
    const [ state, addItem, resetCart, removeItem, updateItem ] = useCart();
    
    return (
        <Container>
        <Header title="Cart" />
        <Content>
            <View>
                <Text>CartScreen </Text>
            </View>
        </Content>
        <Footer />
    </Container>
    );
};

export default CartScreen;

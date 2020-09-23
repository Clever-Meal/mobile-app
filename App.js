import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Layout from './src/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './src/screens/ProfileScreen';
import OrderScreen from './src/screens/OrderScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CartScreen from './src/screens/CartScreen';
import OffersScreen from './src/screens/OffersScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen
            options={{
              title: 'Home',
              drawerIcon: () => <Icon name="home" />
            }}
            name="Home" component={Layout}
          />
          <Drawer.Screen name="Offers" component={OffersScreen}
            options={{
              drawerIcon: () => <Icon name="heart" />
            }}
          />
          <Drawer.Screen name="Order" component={OrderScreen}
            options={{
              drawerIcon: () => <Icon fontSize={2} type="FontAwesome5" name="receipt" />
            }}
          />
          <Drawer.Screen name="Explore" component={ExploreScreen}
            options={{
              drawerIcon: () => <Icon name="search" />
            }}
          />
          <Drawer.Screen name="Profile" component={ProfileScreen}
            options={{
              drawerIcon: () => <Icon name="person" />
            }}
          />
          <Drawer.Screen name="Cart" component={CartScreen}
            options={{
              drawerIcon: () => <Icon name="cart" />
            }}
          />
          <Drawer.Screen name="More" component={SettingsScreen}
            options={{
              drawerIcon: () => <Icon name="more" />
            }}
          />
        </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}
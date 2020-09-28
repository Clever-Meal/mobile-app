import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { BarCodeScanner } from 'expo-barcode-scanner';


const OffersScreen = () => {
    const [tableNumber, setTableNumber] = useState(null);
    const [hasPermission, setPermission] = useState(null);
        
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setPermission(status === 'granted' ? true : false);
        })();
      }, []);
    
    const barCodeScanned = ({ data }) => {
        setTableNumber(data);
        alert(tableNumber);
    }

    return ( hasPermission === null ? <Text>Requesting for camera permission</Text> :
        hasPermission === false ? <Text>No access to camera</Text> :
        <Container>
            <Header title="Offers" />
                    <View  style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}
                    >    
                        <BarCodeScanner
                            onBarCodeScanned={!tableNumber ? 'undefined' : barCodeScanned}
                            style={StyleSheet.absoluteFillObject}
                        />
                         {tableNumber && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                    </View>
            <Footer activeScreen="Offers" />
        </Container>
)};

export default OffersScreen;



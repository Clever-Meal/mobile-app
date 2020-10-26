import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Button } from 'native-base';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { usePermission } from '../context/permissionContext';


const OffersScreen = () => {
    const [scanned, setScanned] = useState(null);
    const { setAllowed, setDenied, state } = usePermission;
        
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          status === 'granted' ? setAllowed : setDenied;
        })();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

    const {width, height} = Dimensions.get('screen');

    const leftTop ={
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderColor: 'white'
    }
    const rightTop ={
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: 'white'
    }
    const leftBottom ={
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'white'
    }
    const rightBottom ={
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'white'
    }


    return ( state === null ? <Text>Requesting for camera permission</Text> :
        state === false ? <Text>No access to camera</Text> :
        <Container>
            <Header title="Offers" />
                    <View  style={{flex: 1, backgroundColor: 'black'}}>    
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={StyleSheet.absoluteFillObject}
                        />
                        <View style={{...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{width: width / 2, height: height / 4}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1, ...leftTop}}/>
                                    <View style={{flex: 1}}/>
                                    <View style={{flex: 1, ...rightTop}}/>
                                </View>
                                <View style={{flex: 1}}/>
                                <View style={{flex: 1,flexDirection: 'row'}}>         
                                    <View style={{flex: 1, ...leftBottom}}/>
                                    <View style={{flex: 1}}/>
                                    <View style={{flex: 1, ...rightBottom}}/>
                                    
                                </View>
                            </View>
                        </View>
                         {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                    </View>
            <Footer activeScreen="Offers" />
        </Container>
)};

export default OffersScreen;



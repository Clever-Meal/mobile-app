import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const EstablishmentCard = ({
    params,
}) => (
        <Card>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{params.title}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: params.image }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="cash" />
                        <Text>{ '€'.repeat(params.price_rate)}</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name="clock" />
                        <Text adjustsFontSizeToFit>{ params.hours }</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>Bar</Text>
                </Right>
            </CardItem>
        </Card>
    );

export default EstablishmentCard;
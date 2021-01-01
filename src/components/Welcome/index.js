import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, TextWelcome } from './styles';

function Welcome (){

    return(
        <Container>
            <TextWelcome>Bem Vindo ao React Native</TextWelcome>
        </Container>
    );

}

export default Welcome;

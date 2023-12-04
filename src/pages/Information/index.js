import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Information({route}){
    return(
        <View style={{marginTop: 30, marginLeft: 30}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Data de Nascimento: {route.params?.dataNascimento}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>E-mail: {route.params?.email}</Text>
            <Text>Ocupação: {route.params?.ocupacao}</Text>
        </View>
    )
}

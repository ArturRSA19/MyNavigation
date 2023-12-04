import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={{marginLeft: 30}}>
            <View style={{marginTop: 20}}>
                <Text>Nome: Artur Rodrigues</Text>
                <Text>Telefone: (61) 999999999</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome: 'Artur Rodrigues',
                    dataNascimento: '19/05/2003',
                    telefone: '(61) 999999999',
                    email: 'artur190503@outlook.com',
                    ocupacao: 'Estudante de Eng. de Software',
                })}
                >Information...</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Nome: Alice Reis</Text>
                <Text>Telefone: (61) 988888888</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                
                {
                    nome: 'Alice Reis',
                    dataNascimento: '11/10/2003',
                    telefone: '(61) 988888888',
                    email: 'alicelinda@yahoo.com',
                    ocupacao: 'Estudante de Arquitetura',
                })}
                >Information...</Text>
            </View>
        </View>
    )
}
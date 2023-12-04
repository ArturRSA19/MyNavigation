import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Information(){
    return(
        <View>
            <Text style={styles.container}>Information!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: '#f123f4',
    }
})


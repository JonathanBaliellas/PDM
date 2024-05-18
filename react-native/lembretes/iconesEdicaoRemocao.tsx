import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';

const iconesEdicaoRemocao = (props: { remover: Function, atualizar: Function }) => {
    return (
        <View
            style={styles.button}
        >
            <Pressable
                onPress={props.remover()}>
                <Ionicons name='trash' size={24} />

            </Pressable>
            <Pressable
                onPress={props.atualizar()}>
                <Feather name='edit' size={24} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        marginLeft: 50
    }
})

export default iconesEdicaoRemocao
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, Pressable, Linking, Platform } from 'react-native'
import React from 'react'

const iconesRedesSociais = () => {
    const openURL = (url: string): void => {
        if (Platform.OS == 'web'){
            window.open(url, '_blank')
        }else{
            Linking.openURL(url)
        }
    }
    return (
        <View
            style={styles.logos}
        >
            <Pressable
                onPress={() => openURL('https://linkedin.com')}
            >
                <Ionicons
                    name='logo-linkedin'
                    size={32}
                    color={'green'}
                />

            </Pressable>
            <Ionicons
                name='logo-instagram'
                size={32}
                color={'purple'}
            />
            <Ionicons
                name='logo-github'
                size={32}
                color={'black'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logos: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default iconesRedesSociais
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numberA, numA] = React.useState('')
  const [numberB, numB] = React.useState('')
  const [titleText, setTitleText] = useState('')
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Número a'
        onChangeText={numA}
        value={numberA}
      />
      <TextInput
        style={styles.input}
        placeholder='Número b'
        onChangeText={numB}
        value={numberB}
      />
      <Button
        onPress={() => {
          let soma = Number(numberA) + Number(numberB);
          setTitleText(`${numberA} + ${numberB} = ${soma}`)
        }}
        title='Somar'
      />
      <Text
        style={styles.text}
        >{titleText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 12,
    padding: 5,
    borderRadius: 5,
    borderColor: 'gray'
  },
  text: {
    margin: 12
  }
});

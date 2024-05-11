import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  state = {
    numA: '',
    numB: '',
    resultado: ''
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Número a'
          onChangeText={(num) => this.setState({numA: num})}
          // value={numberA}
        />
        <TextInput
          style={styles.input}
          placeholder='Número b'
          onChangeText={(num) => this.setState({numB: num})}
          // value={numberB}
        />
        <Button
          onPress={() => {
            const soma = Number(this.state.numA) + Number(this.state.numB);
            this.setState({resultado: `${this.state.numA} + ${this.state.numB} = ${soma}`})
          }}
          title='Somar'
        />
        <Text
          style={styles.text}
          >{this.state.resultado}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
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

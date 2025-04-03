import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

function Login() {
  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={{
          uri: 'https://robohash.org/b4faa298dd94fea676ea797a194cb6e4?set=set4&bgset=&size=400x400',
        }}
      />

      <Text> </Text>


      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="SENHA"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />

      <Button
        title="Fazer o login"
        buttonStyle={{ backgroundColor: 'black' }}
        titleStyle={{ color: 'white' }}
      />

      <Text> </Text>

      <Button
        title="Cadastre-se"
        buttonStyle={{ backgroundColor: 'black' }}
        titleStyle={{ color: 'white' }}
      />

      <Text style={styles.text}>Esqueceu a senha?</Text>
    </View>
  );
}

function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Input
        placeholder="NOME"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="SENHA"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        buttonStyle={{ backgroundColor: 'black' }}
        titleStyle={{ color: 'white' }}
      />
    </View>
  );
}

export default function EsqueceuSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha</Text>

      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Button
        title="Enviar"
        buttonStyle={{ backgroundColor: 'black' }}
        titleStyle={{ color: 'white' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#709c9c',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

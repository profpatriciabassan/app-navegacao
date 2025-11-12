// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');

 return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      
  <Button
        title="Entrar"
        onPress={() => navigation.navigate('Posts', { user: nome })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    
 marginBottom: 12,
    borderRadius: 5,
  },
});


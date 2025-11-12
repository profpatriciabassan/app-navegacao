// src/screens/PostsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PostsScreen({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;
return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user}!</Text>
      <Text style={styles.subtitle}>Aqui estão seus posts 📱</Text>
      <Button title="Sair" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555' },
});

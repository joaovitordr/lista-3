import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contador de Pessoas</Text>
      <Text style={styles.countText}>Pessoas no restaurante: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Entrada" onPress={increment} />
        <Button title="Saída" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countText: {
    fontSize: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
  const [cookieBroken, setCookieBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  const fortunes = [
    "Você terá um grande dia!",
    "A sorte sorri para os ousados.",
    "Alguém muito especial está pensando em você.",
    "O sucesso está ao seu alcance!",
    "A vida vai te surpreender com algo maravilhoso."
  ];

  const breakCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setCookieBroken(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={cookieBroken ? require('./assets/cookie-opened.png') : require('./assets/cookie-closed.png')}
        style={styles.cookieImage}
      />
      <Button title="Quebrar Biscoito" onPress={breakCookie} />
      {fortune ? <Text style={styles.fortuneText}>{fortune}</Text> : null}
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
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

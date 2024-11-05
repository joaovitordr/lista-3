import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
  const [quote, setQuote] = useState({});
  
  const quotes = [
    {
      quote: "A vida é o que acontece enquanto estamos ocupados fazendo outros planos.",
      author: "John Lennon",
      image: require('./assets/john-lennon.jpg')
    },
    {
      quote: "O único modo de fazer um ótimo trabalho é amar o que você faz.",
      author: "Steve Jobs",
      image: require('./assets/steve-jobs.jpg')
    },
    {
      quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
      image: require('./assets/churchill.jpg')
    }
  ];

  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {quote.image ? <Image source={quote.image} style={styles.authorImage} /> : null}
      {quote.quote ? <Text style={styles.quoteText}>"{quote.quote}"</Text> : null}
      {quote.author ? <Text style={styles.authorName}>- {quote.author}</Text> : null}
      <Button title="Nova Citação" onPress={newQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});

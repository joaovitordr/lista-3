import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [isRunning, setIsRunning] = useState(false); 
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null); 

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000); // minutos
    const seconds = Math.floor((time % 60000) / 1000); // segundos
    const milliseconds = time % 1000; // milissegundos

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };


  const toggleTimer = () => {
    if (isRunning) {
      
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 10); 
      }, 10);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  
  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIntervalId(null);
    setTime(0); 
  };

  
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? 'Pausar' : 'Iniciar'} onPress={toggleTimer} />
        <Button title="Reiniciar" onPress={resetTimer} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  time: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default App;

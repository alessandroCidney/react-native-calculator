// React
import React from 'react';

// React Native
import { Text, View } from 'react-native';

// Expo Status Bar
import { StatusBar } from 'expo-status-bar';

// Components
import { Main } from './src/screens/Main';

// Styles
import { styles } from './src/global/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Main />
    </View>
  );
}
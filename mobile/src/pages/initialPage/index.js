import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';

import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu} >
        <View style={styles.espace} />
        <Text style={styles.logo}>Google Podcast</Text>
        <View style={styles.profile} />
      </View>
      <Text>Teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

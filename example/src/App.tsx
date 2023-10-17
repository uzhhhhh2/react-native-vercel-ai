import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Chat from './Chat';
// import Completion from './Completion';
export default function App() {
  return (
    <View style={styles.container}>
      <Chat />
      {/* <Completion /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

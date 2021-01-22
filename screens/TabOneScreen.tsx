import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Login from "../components/Login";
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  // React.const [authValues, setAuthValues] = useState()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in here</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

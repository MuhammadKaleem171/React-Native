import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';


Tab3 = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Tab 2</Text>
  </View>


export default Tab3;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  }
});
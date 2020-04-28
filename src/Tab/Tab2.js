import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';


Tab2 = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Tab 1</Text>
  </View>


export default Tab2;

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
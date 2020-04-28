import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';


Screen2 = () =>
<View style={styles.center}>
<Text style={styles.title}> Favourite </Text>
  </View>

export default Screen2;

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
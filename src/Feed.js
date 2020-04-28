import React, { Component } from 'react';
import { View, Text ,Button,StyleSheet} from 'react-native';


class Feed extends Component{
    render(){
        return(
<View style={styles.center}>
<Text style={styles.title}> Feed button </Text>
    <Button 
    title ="Go to"
    onPress={()=> this.props.navigation.navigate('Detail')} />

</View>

        );
    }
}
export default Feed;
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
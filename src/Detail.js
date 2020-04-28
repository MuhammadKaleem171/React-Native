import React, { Component } from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';


class Detail extends Component{
    render(){
        return(
<View style={styles.center}>
<Text style={styles.title}> Detail</Text>
    <Button 
    title ="Go to Top"
    onPress={()=> this.props.navigation.navigate('TopTab')} />
       <Button 
    title ="Go to Detail"
    onPress={()=> this.props.navigation.navigate('BottomTab')} />

</View>

        );
    }
}
 export default Detail

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
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render (){
  return (
    <View style={styles.container}>
    
      <View style={{flexDirection:"row"}}>
        <View style={[styles.title, { borderLeftWidth:0, borderTopWidth:0 }]}/>
        <View style={[styles.title, { borderTopWidth:0 }]}/>
        <View style={[styles.title, { borderTopWidth:0, borderRightWidth:0 }]}/>
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={[styles.title, { borderLeftWidth:0 }]}/>
        <View style={styles.title}/>
        <View style={[styles.title, { borderRightWidth:0 }]}/>
        
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={[styles.title, { borderLeftWidth:0, borderBottomWidth:0 }]}/>
        <View style={[styles.title, { borderBottomWidth:0 }]}/>
        <View style={[styles.title, { borderBottomWidth:0, borderRightWidth:0 }]}/>
      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tile: {
    borderWidth: 5,
    borderColor: '#7a0280',
    width:100,
    height:100,
  },


});

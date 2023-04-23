/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {


  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.headerStyle}></View>   
      <View style={styles.footerStyle}></View>
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
container:{
  backgroundColor:"#207398",
  width:"100%",
  height:"100%",
},
headerStyle:{
  width : "100%",
  height : "40",
  backgroundColor : "#FFFFFF",
},
footerStyle:{

},
});

export default App;

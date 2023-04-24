/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import BouncyCheckbox from "react-native-bouncy-checkbox";

import React, { useState } from 'react';

import type {PropsWithChildren} from 'react';
import { TouchableOpacity } from 'react-native';

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
import BouncyCheckbox from "react-native-bouncy-checkbox";

function App(): JSX.Element {
 const [checked, setchecked] = useState(false);

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
      
       <View style={styles.headerStyle}>
        <Text style={styles.todo_text}>Todo List</Text>
        {/* <Text style={styles.todo_text2}> yyTodo List</Text> */}
        
        </View>   
        <View style={styles.bodypart}>
          <View style={styles.taskgroup}>
          <View style={styles.tasklist}>
            <View style={styles.taskleftsection}>
           
             
            <BouncyCheckbox
                  size={25}
                  fillColor="#1ED3E2"
                  unfillColor="#1ED3E2"
                 style={styles.checkbox}
                  
                  innerIconStyle={{borderRadius:0 }}
                  iconStyle={{borderRadius:0 }}
                  textStyle={{ fontFamily: "JosefinSans-Regular" }}
                  onPress={(setchecked: boolean) => {}}
                />            
            <Text style={styles.tasktext}>Task 1</Text>
          </View>
            <View style={styles.taskrightsection}>
              <TouchableOpacity><Text style={styles.tasktextright}>x</Text></TouchableOpacity>
            
            </View>
          </View>
        </View>
        </View>
    
      </ScrollView>
      <View style={styles.footerStyle}></View> 
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
container:{
  backgroundColor:"#207398",
  width:"100%",
  height:"100%",
  flex: 1,
  flexDirection: 'column',
},
headerStyle:{
  flex:1,
  flexDirection :'row',
  width : "100%",
  height : 70,
  // backgroundColor : "#FFFFFF",
},
todo_text:{
   color : "#FFFFFF",
   fontSize: 20,
   fontWeight: 'bold',
   marginLeft:20,
   marginTop:20,
},
bodypart:{
  width: "100%",
  height: 650,
  backgroundColor:"#FFFFFF",
  flex: 1,
},
checkbox:{
  width:30,
  justifyContent:'center',
  borderRadius:0,
},
taskgroup:{
  flex:1,
  width: "100%",
  height: 50,

  margin: "auto",
  flexDirection:'row',
  // marginLeft:"2.5%",
  marginTop: 10,
  borderRadius: 5,
},
tasklist:{
  // flex:1,
  width: "95%",
  height: 50,
  backgroundColor: "#B8F5FA",
  margin: "auto",
  flexDirection:'row',
  marginLeft:"2.5%",
  // marginTop: 10,
  borderRadius: 5,
  alignItems:'center',
  justifyContent:'center',
  

},
tasktext :{

  fontSize: 18,
  fontWeight: 'bold',
  // borderWidth:1,
  paddingTop: 12,
  // marginLeft:20,
  
  
},
taskleftsection:{
  width:"80%",
  height:50,
  // borderWidth:1,
  // alignContent:'center',
  // justifyContent:'center',
  flexDirection:'row',
},
taskrightsection:{
  width:50,
  height:50,
  justifyContent:'center',
},
tasktextright :{

  fontSize: 30,
  fontWeight: 'bold',
  color:"#E21717",
  // marginLeft:20,
  marginTop: -5,
    textAlign:'right',
  
  
},
todo_text2:{
   color : "#FFFFFF",
   fontSize: 20,
   fontWeight: 'bold',
   marginLeft:20,
   marginTop:20,
},
footerStyle:{

},
});

export default App;

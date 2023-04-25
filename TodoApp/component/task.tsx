import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import deleteTask from  '../App';
export default function task(props: { text: string|undefined; index : number| undefined}) {
    const deletetrigger = (index:number|undefined)=>{
      console.log(index)
    //   deleteTask()
    }
  return (
<></>
  )
}

const styles = StyleSheet.create({
    checkbox:{
        width:30,
        justifyContent:'center',
        borderRadius:0,
      },
      taskgroup:{
        // flex:1,
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
})
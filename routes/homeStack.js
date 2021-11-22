import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "../screens/SignInScreen";
import Front_page from "../screens/Front_page";
import SignUpScreen from "../screens/SIgnUpScreen";
import Connection from "../screens/Connection";



const screens={
   screen:{
      screen: Front_page,
      navigationOptions:{
         title: 'Home'
      }
   },
   SignIn:{
      screen: SignInScreen,
      navigationOptions:{
         title: 'SignIn'
      }
   },
   user:
   {
      screen:Connection,

   },
   newUser:{
      screen: SignUpScreen,
      navigationOptions:{
         title: 'SignUp'
      }
   }
}

const homeStack = createStackNavigator(screens,{
   defaultNavigationOptions:{
      headerTintColor:"#444",
      headerStyle:{backgroundColor : '#eee'}
   }
});
export default homeStack;
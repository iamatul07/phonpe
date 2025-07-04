import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../App";
import QRcodeScanner from "../screens/QRcodeScanner";
import PayNow from "../screens/PayNow";
import UpiDetails from "../screens/Upi/UpiDetails";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
      <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen name='App' component={App} options={{headerShown:false}} />
          <Stack.Screen name='QRcode' component={QRcodeScanner} options={{headerShown:false}} />
          <Stack.Screen name='PayNow' component={PayNow} options={{headerShown:false}} />
          <Stack.Screen name='UpiDetails' component={UpiDetails} options={{headerShown:false}} />

         </Stack.Navigator>

      </NavigationContainer>  
     
    );
  };
  
  export default StackNavigation;
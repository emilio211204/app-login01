import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={()=>({headerShown:false})}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        </Stack.Navigator>
    );
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}
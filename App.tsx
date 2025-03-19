import { StyleSheet } from 'react-native';
import { ScreenReposicao } from './src/screens/ScreenReposicao'
import { ScreenInventario } from './src/screens/ScreenInventario'
import { Modules } from './src/screens/Modules';
import { Login } from './src/screens/Login';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen 
          name="Modules" 
          component={Modules} 
        />
        <Stack.Screen 
          name="ScreenReposicao" 
          component={ScreenReposicao} 
        />
        <Stack.Screen 
          name="ScreenInventario" 
          component={ScreenInventario} 
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import UserScreen from './components/User';
import PostScreen from './components/Post';
import store from './redux/store'
import {Provider} from 'react-redux'
// import Home from './components/Home';


const Stack = createStackNavigator();


export default App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
    
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};








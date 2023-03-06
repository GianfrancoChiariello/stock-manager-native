import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {
  NativeRouter,
  Route,
  Switch
} from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';
import {useHistory} from 'react-router-native';
import {GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';


import Stock from './screens/Stock';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import ChangeStock from './screens/ChangeStock';
import Ventas from './screens/Ventas';


export default function App() {

  const route = useHistory()
  

  return (
    <Provider store={store}>  
    <GestureHandlerRootView style={{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Stock" component={Stock} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/ChangeStock" component={ChangeStock} />
          <Route exact path="/Ventas" component={Ventas} />
        </Switch>
      </NativeRouter>
  </GestureHandlerRootView>
  </Provider>
  )
}

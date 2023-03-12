import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {
  NativeRouter,
  Route,
  Switch
} from "react-router-native";
import {useHistory} from 'react-router-native';


import Stock from './screens/Stock';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import ChangeStock from './screens/ChangeStock';
import Ventas from './screens/Ventas';
import Proveedorr from './screens/Proveedor';
import { StatusBar } from 'react-native';

export default function App() {

  const route = useHistory()

  StatusBar.setBackgroundColor('rgba(43, 43, 43, 1)');

  return (
    <Provider store={store}>  
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Stock" component={Stock} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/ChangeStock" component={ChangeStock} />
          <Route exact path="/Ventas" component={Ventas} />
          <Route exact path="/Proveedorr" component={Proveedorr} />
        </Switch>
      </NativeRouter>
  </Provider>
  )
}

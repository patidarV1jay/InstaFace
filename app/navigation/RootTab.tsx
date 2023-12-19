import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SigninScreen } from '../modules/auth';
import About from '../modules/About';
import TopTab from './TopTab';
const BottomTab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const RootTab = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen name="Top" component={TopTab} />
      <MaterialTab.Screen name="About" component={About} />
    </MaterialTab.Navigator>
  );
};

export default RootTab;

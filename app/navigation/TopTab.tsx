import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../modules/Chats';
import Home from '../modules/Home';
import { SigninScreen } from '../modules/auth';
const TabTop = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Home" component={Home} />
      <TabTop.Screen name="chats" component={Chats} />
    </TabTop.Navigator>
  );
};

export default TopTab;

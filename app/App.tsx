import { SafeAreaView, View, Text } from 'react-native';
import { SigninScreen } from './modules/auth';
import { NavigationContainer } from '@react-navigation/native';
import RootTab from './navigation/RootTab';
import Animation from './modules/animation/Animation';

const App = () => {
  return (
    //  <NavigationContainer>
    //    <RootTab />
    //  </NavigationContainer>
    <Animation />
  );
};

export default App;

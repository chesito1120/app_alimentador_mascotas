// frontend/app/index.js

import { registerRootComponent } from 'expo';
import { Tabs } from 'expo-router';
import LoginScreen from '../src/screens/LoginScreen';

export default function App() {
  return (
    <Tabs>
      <Tabs.Screen name="index" component={LoginScreen} />
    </Tabs>
  );
}

registerRootComponent(App);

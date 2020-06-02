import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import InterstitialAdsScreen from './screens/admob/InterstitialAdsScreen';
import RewardedAdsScreen from './screens/admob/RewardedAdsScreen';
import BannerAdsScreen from './screens/admob/BannerAdsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="InterstitialAds"
          component={InterstitialAdsScreen}
        />
        <Stack.Screen name="RewardedAds" component={RewardedAdsScreen} />
        <Stack.Screen name="BannerAds" component={BannerAdsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

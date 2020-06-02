import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <Text>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="go to InterstitialAds"
          style={styles.button}
          onPress={() => navigation.navigate('InterstitialAds')}
        />
        <Button
          title="go to RewardedAds"
          style={styles.button}
          onPress={() => navigation.navigate('RewardedAds')}
        />
        <Button
          title="go to BannerAds"
          style={styles.button}
          onPress={() => navigation.navigate('BannerAds')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    marginTop: 20,
    padding: 20,
  },
});

export default HomeScreen;

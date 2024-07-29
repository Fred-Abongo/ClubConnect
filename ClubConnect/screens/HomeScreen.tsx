// app/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UserContext } from '../context/UserContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to ClubConnect!</Text>
      {user ? (
        <Text style={styles.welcome}>Hello, {user.name}!</Text>
      ) : (
        <Text style={styles.welcome}>Please log in to enjoy personalized features.</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Featured Venues"
          onPress={() => navigation.navigate('FeaturedVenues')}
        />
        <Button
          title="Recommended Venues"
          onPress={() => navigation.navigate('RecommendedVenues')}
        />
        <Button
          title="Scan to Pay"
          onPress={() => navigation.navigate('ScanToPay')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 300,
  },
});

export default HomeScreen;
// app/screens/SettingsScreen.tsx
import React, { useContext, useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { UserContext } from '../context/UserContext';

const SettingsScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>You are not logged in.</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <Button title="Logout" onPress={() => navigation.navigate('Profile')} />
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
  },
});

export default SettingsScreen;
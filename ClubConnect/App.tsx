// app/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeaturedVenuesScreen from './screens/FeaturedVenuesScreen';
import RecommendedVenuesScreen from './screens/RecommendedVenuesScreen';
import ScanToPayScreen from './screens/ScanToPayScreen';
import VenueDetailsScreen from './screens/VenueDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import IncidentReportingScreen from './screens/IncidentReportingScreen';

// Import your context providers
import { UserProvider } from './context/UserContext';
import { PaymentProvider } from './context/PaymentContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <PaymentProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="FeaturedVenues" component={FeaturedVenuesScreen} />
              <Stack.Screen name="RecommendedVenues" component={RecommendedVenuesScreen} />
              <Stack.Screen name="ScanToPay" component={ScanToPayScreen} />
              <Stack.Screen name="VenueDetails" component={VenueDetailsScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="IncidentReporting" component={IncidentReportingScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaymentProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
};

export default App;
// app/screens/VenueDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VenueDetailsScreen = ({ route }) => {
  const { venue } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{venue.name}</Text>
      <Text style={styles.description}>{venue.description}</Text>
      <Text style={styles.address}>{venue.address}</Text>
      {/* Add more details as necessary */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
});

export default VenueDetailsScreen;
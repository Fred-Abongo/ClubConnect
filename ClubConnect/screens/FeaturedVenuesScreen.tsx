// app/screens/FeaturedVenuesScreen.tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../context/UserContext';

const FeaturedVenuesScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Fetch featured venues from an API or database
    const fetchVenues = async () => {
      try {
        // Replace with actual API call or database query
        const fetchedVenues = [
          { id: '1', name: 'Venue One', description: 'A great place to enjoy music and drinks.' },
          { id: '2', name: 'Venue Two', description: 'Experience the best nightlife here.' },
          { id: '3', name: 'Venue Three', description: 'Your go-to spot for fun and entertainment.' },
        ];
        setVenues(fetchedVenues);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };

    fetchVenues();
  }, []);

  const renderVenueItem = ({ item }) => (
    <TouchableOpacity style={styles.venueItem} onPress={() => navigation.navigate('VenueDetails', { venueId: item.id })}>
      <Text style={styles.venueName}>{item.name}</Text>
      <Text style={styles.venueDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Featured Venues</Text>
      {user && <Text style={styles.welcome}>Welcome, {user.name}!</Text>}
      <FlatList
        data={venues}
        keyExtractor={(item) => item.id}
        renderItem={renderVenueItem}
        contentContainerStyle={styles.list}
      />
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
  welcome: {
    fontSize: 18,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  venueItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  venueName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  venueDescription: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
});

export default FeaturedVenuesScreen;
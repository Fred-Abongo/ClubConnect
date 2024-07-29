// app/screens/IncidentReportingScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const IncidentReportingScreen = ({ navigation }) => {
  const [incidentDetails, setIncidentDetails] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const submitIncidentReport = () => {
    // You can integrate this with your backend API to handle the incident report submission
    if (incidentDetails && location && description) {
      Alert.alert('Incident Reported', 'Your incident has been reported successfully!');
      // Reset form
      setIncidentDetails('');
      setLocation('');
      setDescription('');
      navigation.navigate('Home'); // Navigate to Home after submission
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Report an Incident</Text>
      <TextInput
        style={styles.input}
        placeholder="Incident Title"
        value={incidentDetails}
        onChangeText={setIncidentDetails}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={submitIncidentReport} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    textAlignVertical: 'top',
  },
});

export default IncidentReportingScreen;
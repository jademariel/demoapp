import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Profile Component
const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar Image */}
      <Image
        style={styles.avatar}
        source={require('../../assets/profile.jpg')} // Add the correct path to your avatar image
      />
      
      {/* Username (Email or Handle) */}
      <Text style={styles.username}>@loremipsum</Text>

      {/* Stats Section (Cats, Liked, and Saved together) */}
      <View style={styles.statsContainer}>
        <Text style={styles.stats}>13 Cats | 6 Liked | Saved</Text>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>About Me</Text>
        <Text style={styles.bio}>Age: 23</Text>
        <Text style={styles.bio}>Occupation: Cat Care Expert</Text>
        <Text style={styles.bio}>Hobbies: Cat Grass, Playing with Cats</Text>
      </View>

      {/* Buttons: Edit Profile */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles for the Profile Page
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#FFF8DE', //beige
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#ffbb00', 
    marginBottom: 20,
  },
  username: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333', 
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stats: {
    fontSize: 16,
    color: '#555', // Lighter dark color for stats
    fontWeight: '500',
  },
  bioContainer: {
    marginVertical: 20,
    paddingHorizontal: 25,
    width: '90%',
    backgroundColor: '#fff', // White background for bio section
    borderRadius: 10,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E1E1E1', // Light border around bio container
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4C9B55', // Green color for title
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#444', // Darker text color for bio
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4C9B55', // Green button
    padding: 12,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Profile;

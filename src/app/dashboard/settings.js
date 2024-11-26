import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';

// SettingsScreen Component
const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  // Dynamic Styles based on dark mode
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/profile.jpg')} // Correct image path
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Lorem Ipsum</Text>
      </View>

      {/* Settings List */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Send Feedback</Text>
        </TouchableOpacity>
      </View>

      {/* Account Section */}
      <View style={styles.accountContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Light theme styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
  },
  profileContainer: {
    backgroundColor: '#fda736',
    padding: 25,
    alignItems: 'left',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  accountContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

// Dark theme styles
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  profileContainer: {
    backgroundColor: '#4C9B55',
    padding: 25,
    alignItems: 'left',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsContainer: {
    marginTop: 20,
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
  accountContainer: {
    marginTop: 20,
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default SettingsScreen;

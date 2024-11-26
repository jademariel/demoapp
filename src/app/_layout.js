import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            animation: 'none',
          }}
        >
          {/* Root-level routes */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ title: 'Registration' }} />
          <Stack.Screen name="recover" options={{ title: 'Forgot Password?' }} />

          {/* Nested routes under dashboard */}
          <Stack.Screen name="dashboard/_layout" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;

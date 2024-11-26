import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        {/* Home Route */}
        <Drawer.Screen
          name="home" // Match this to `dashboard/home.js`
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={20}
              />
            ),
          }}
        />
        {/* Settings Route */}
        <Drawer.Screen
          name="settings" // Match this to `dashboard/settings.js`
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={20}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

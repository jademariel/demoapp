import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; // Expo Router's useRouter

export default function DrawerContent() {
    const router = useRouter();
    const year = new Date().getFullYear();
    const { top, bottom } = useSafeAreaInsets();

    const handleLogout = () => {
        router.push('/'); // Redirect to home or login screen
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Logo Section */}
            <View style={[styles.logoContainer, { paddingTop: 20 + top, paddingBottom: 20 }]}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                />
            </View>

            {/* Drawer Items */}
            <View>
                {/* Profile Item */}
                <TouchableOpacity onPress={() => router.push('/dashboard/profile')}>
                    <View style={styles.drawerItem}>
                        <MaterialCommunityIcons name="account" size={24} />
                        <Text style={styles.drawerItemText}>Profile</Text>
                    </View>
                </TouchableOpacity>

                {/* Home Item */}
                <TouchableOpacity onPress={() => router.push('/dashboard/home')}>
                    <View style={styles.drawerItem}>
                        <MaterialCommunityIcons name="home" size={24} />
                        <Text style={styles.drawerItemText}>Home</Text>
                    </View>
                </TouchableOpacity>

                {/* Settings Item */}
                <TouchableOpacity onPress={() => router.push('/dashboard/settings')}>
                    <View style={styles.drawerItem}>
                        <MaterialCommunityIcons name="cog" size={24} />
                        <Text style={styles.drawerItemText}>Settings</Text>
                    </View>
                </TouchableOpacity>

                {/* Logout Item */}
                <TouchableOpacity onPress={handleLogout}>
                    <View style={styles.drawerItem}>
                        <MaterialCommunityIcons name="logout" size={24} />
                        <Text style={styles.drawerItemText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Footer Section */}
            <View style={[styles.footerContainer, { paddingBottom: 20 + bottom }]}>
                <Text style={styles.footerText}>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 150,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    drawerItemText: {
        marginLeft: 10,
    },
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 12,
    },
});

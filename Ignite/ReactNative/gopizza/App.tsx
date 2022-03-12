import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { AuthProvider } from '@hooks/auth';
import { LogBox } from 'react-native';
import { Routes } from './src/routes';
import Orders from '@screens/Orders';
export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Parece que você está usando uma API antiga com componentes de gestos, confira o novo sistema de gestos!",
  ]);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

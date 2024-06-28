import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainAppStack } from './src/Presentation/navigator/MainAppStack';
import { AuthProvider} from './src/Presentation/context/auth/AuthContext'; 
import React, { ReactElement } from 'react';

interface AppStateProps {
  children: ReactElement | ReactElement[] | null;
}

const AppState: React.FC<AppStateProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <MainAppStack />
      </AppState>
      
    </NavigationContainer>
  );
}

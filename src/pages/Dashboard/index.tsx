import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import useAuth from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={styles.content}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;

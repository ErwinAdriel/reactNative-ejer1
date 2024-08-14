import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`text-black justify-center items-center flex-1`}>
      <Text style={tw`text-3xl`}>Bienvenidos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

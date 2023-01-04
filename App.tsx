import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: "green",
        }}
      >
        <Text>Search</Text>
        <StatusBar style="auto" />
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "blue",
          flex: 1,
        }}
      >
        <Text>List</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
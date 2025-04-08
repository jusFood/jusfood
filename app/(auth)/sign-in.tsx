import { StyleSheet, View, Text } from "react-native";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign-In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  map: {
    flex: 1,
  },
});

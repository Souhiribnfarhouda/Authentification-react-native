import React, { FC, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Input } from "../components";
const App: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text>Login Up Screen </Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTexEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={() => alert("Pressed")} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Dont't Have am Account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("signup")}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: "rgba(81,135,200,1)" }}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

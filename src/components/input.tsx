import React, { FC } from "react";
import { TextInput } from "react-native-gesture-handler";
import { View, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTexEntry?: boolean;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTexEntry || false}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});

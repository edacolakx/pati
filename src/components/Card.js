import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";

export default function Card(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("Card Pressed", props.title);
      }}
      style={{
        gap: 10,
        justifyContent: "center",
        alignContent: "center",
        width: "23%",
        marginRight: "auto",
        marginBottom: "4%",
      }}
    >
      <View
        style={{
          padding: 20,
          backgroundColor: "#e8e8e8",
          borderRadius: 10,
        }}
      >
        {props.icon}
      </View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

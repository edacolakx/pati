import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Menu, TextInput } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

export default function HomePage() {
  const [page, setPage] = useState("Rides");

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 20, paddingTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 24,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 10,
              borderBottomWidth: 3,
              borderBottomColor: page == "Rides" ? "black" : "white",
              padding: 4,
              alignItems: "flex-end",
            }}
            onPress={() => setPage("Rides")}
          >
            <FontAwesome6 name="car-side" size={24} color="black" />
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 10,
              borderBottomWidth: 3,
              borderBottomColor: page == "Delivery" ? "black" : "white",
              padding: 4,
              alignItems: "flex-end",
            }}
            onPress={() => setPage("Delivery")}
          >
            <Ionicons name="fast-food" size={24} color="black" />
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Delivery</Text>
          </TouchableOpacity>
        </View>
        {page == "Rides" ? (
          <View>
            <TextInput
              style={{
                backgroundColor: "#e8e8e8",
              }}
              outlineStyle={{
                borderRadius: 30, // Tüm kenarlara uygulanır
              }}
              theme={{
                colors: {
                  primary: "#ccc",
                },
              }}
              mode="outlined"
              placeholder="Where to?"
              left={
                <TextInput.Icon
                  icon={({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                  )}
                />
              }
            />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Card from "./components/Card";

export default function Services() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", paddingTop: 20 }}>
          Services
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 20 }}>
          Go Anywhere
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={styles.bigContainers}>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
              }}
            >
              Ride
            </Text>
            <Image source={require("../assets/car.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigContainers}>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
              }}
            >
              Package
            </Text>
            <Image source={require("../assets/car.png")}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 20, flexDirection: "row", gap: 10 }}>
          <Card title="Reserve" />
          <Card title="Hourly" />
          <Card title="Rent" />
          <Card title="2-Wheels" />
        </View>
        <View style={{ paddingTop: 6, flexDirection: "row", gap: 10 }}>
          <Card title="Transit" />
          <Card title="Charter" />
          <Card title="Explore" />
          <Card title="Travel" />
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 10 }}>
          Get anything delivered
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.bigContainers}>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
              }}
            >
              Restaurant
            </Text>
            <Image source={require("../assets/car.png")}></Image>
          </View>
          <View style={styles.bigContainers}>
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
              }}
            >
              Grocery
            </Text>
            <Image source={require("../assets/car.png")}></Image>
          </View>
        </View>
        <View style={{ paddingTop: 20, flexDirection: "row", gap: 10 }}>
          <Card title="Reserve" />
          <Card title="Hourly" />
          <Card title="Rent" />
          <Card title="2-Wheels" />
        </View>
        <View style={{ paddingTop: 6, flexDirection: "row", gap: 10 }}>
          <Card title="Transit" />
          <Card title="Charter" />
          <Card title="Explore" />
          <Card title="Travel" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bigContainers: {
    backgroundColor: "#e8e8e8",
    padding: 12,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
    width: "50%",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

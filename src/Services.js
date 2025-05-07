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
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
            <FontAwesome6 name="car-side" size={44} color="black" />
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
            <MaterialCommunityIcons name="package" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 20, flexDirection: "row", gap: 10 }}>
          <Card
            title="Reserve"
            icon={<AntDesign name="calendar" size={36} color="black" />}
          />
          <Card
            title="Hourly"
            icon={<Entypo name="clock" size={36} color="black" />}
          />
          <Card
            title="Rent"
            icon={
              <MaterialCommunityIcons name="car-key" size={36} color="black" />
            }
          />

          <Card
            title="2-Wheels"
            icon={<MaterialIcons name="motorcycle" size={36} color="black" />}
          />
        </View>
        <View style={{ paddingTop: 6, flexDirection: "row", gap: 10 }}>
          <Card
            title="Transit"
            icon={
              <MaterialIcons
                name="directions-transit"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Charter"
            icon={
              <MaterialCommunityIcons
                name="truck-minus"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Explore"
            icon={
              <MaterialCommunityIcons
                name="rocket-launch"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Travel"
            icon={<MaterialIcons name="luggage" size={36} color="black" />}
          />
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
            <FontAwesome6 name="bowl-food" size={44} color="black" />
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
            <Entypo name="shopping-cart" size={50} color="black" />
          </View>
        </View>
        <View style={{ paddingTop: 20, flexDirection: "row", gap: 10 }}>
          <Card
            title="Reserve"
            icon={<AntDesign name="calendar" size={36} color="black" />}
          />
          <Card
            title="Hourly"
            icon={<Entypo name="clock" size={36} color="black" />}
          />
          <Card
            title="Rent"
            icon={
              <MaterialCommunityIcons name="car-key" size={36} color="black" />
            }
          />

          <Card
            title="2-Wheels"
            icon={<MaterialIcons name="motorcycle" size={36} color="black" />}
          />
        </View>
        <View style={{ paddingTop: 6, flexDirection: "row", gap: 10 }}>
          <Card
            title="Transit"
            icon={
              <MaterialIcons
                name="directions-transit"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Charter"
            icon={
              <MaterialCommunityIcons
                name="truck-minus"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Explore"
            icon={
              <MaterialCommunityIcons
                name="rocket-launch"
                size={36}
                color="black"
              />
            }
          />
          <Card
            title="Travel"
            icon={<MaterialIcons name="luggage" size={36} color="black" />}
          />
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

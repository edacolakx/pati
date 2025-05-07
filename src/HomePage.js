import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Menu, TextInput } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import Card from "./components/Card";
import Carousel from "react-native-reanimated-carousel";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomePage() {
  const [page, setPage] = useState("Rides");
  const [savedWork, setSavedWork] = useState(true);
  const [savedHome, setSavedHome] = useState(true);
  const width = Dimensions.get("window").width;
  const data = [
    require("../assets/first.jpg"),
    require("../assets/second.jpg"),
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 20,
          backgroundColor: "white",
          paddingTop: 50,
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
        <>
          <View
            style={{
              padding: 16,
              backgroundColor: "white",
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 8,
                  zIndex: 100,
                  backgroundColor: "white",
                  top: 10,
                  width: "30%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: 30,
                }}
              >
                <AntDesign
                  name="clockcircle"
                  size={20}
                  color="black"
                  style={{ marginRight: 4 }}
                />
                <Text style={{ color: "black", fontWeight: "bold" }}>Now</Text>
                <AntDesign name="down" size={18} color="black" />
              </TouchableOpacity>
              <TextInput
                style={{
                  backgroundColor: "#e8e8e8",
                  width: "100%",
                }}
                outlineStyle={{
                  borderRadius: 30,
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
            {savedWork == true ? (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderRadius: 30,
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  name="work"
                  size={24}
                  color="black"
                  style={{
                    backgroundColor: "#e8e8e8",
                    borderRadius: 30,
                    padding: 10,
                  }}
                />
                <View
                  style={{
                    justifyContent: "space-between",
                    borderBottomColor: "#e8e8e8",
                    borderBottomWidth: 1,
                    width: "80%",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>Work</Text>
                  <Text style={{ fontSize: 12 }}>1455 Market St</Text>
                </View>
              </TouchableOpacity>
            ) : null}
            {savedHome == true ? (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderRadius: 30,
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 6,
                }}
              >
                <Entypo
                  name="home"
                  size={24}
                  color="black"
                  style={{
                    backgroundColor: "#e8e8e8",
                    borderRadius: 30,
                    padding: 10,
                  }}
                />
                <View
                  style={{
                    justifyContent: "space-between",
                    borderBottomColor: "#e8e8e8",
                    borderBottomWidth: 1,
                    width: "80%",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>Home</Text>
                  <Text style={{ fontSize: 12 }}>903 Market St</Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
          <View
            style={{
              padding: 16,
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{ position: "absolute", top: 16, right: 16 }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>See All</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Suggestions
            </Text>

            <View style={{ paddingTop: 6, flexDirection: "row", gap: 10 }}>
              <Card
                title="Ride"
                icon={<FontAwesome6 name="car-side" size={36} color="black" />}
              />
              <Card
                title="Package"
                icon={
                  <MaterialCommunityIcons
                    name="package"
                    size={36}
                    color="black"
                  />
                }
              />
              <Card
                title="Reserve"
                icon={<AntDesign name="calendar" size={36} color="black" />}
              />
              <Card
                title="Rent"
                icon={
                  <MaterialCommunityIcons
                    name="car-key"
                    size={36}
                    color="black"
                  />
                }
              />
            </View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, marginVertical: 20 }}
            >
              Ways to plan with Uber
            </Text>

            <Carousel
              loop
              width={width}
              height={200}
              autoPlay={true}
              data={data}
              scrollAnimationDuration={1000}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <Image
                    source={item}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    resizeMode="cover"
                  />
                </View>
              )}
            />
          </View>
        </>
      ) : null}
    </ScrollView>
  );
}

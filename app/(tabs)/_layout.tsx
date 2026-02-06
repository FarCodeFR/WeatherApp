import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarActiveTintColor: "rgba(255, 255, 255, 0.85)",
        tabBarInactiveTintColor: "rgba(153, 153, 153, 0.71)",
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            <BlurView
              intensity={70}
              tint="dark"
              style={StyleSheet.absoluteFill}
            />
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: "rgba(0,0,0,0.25)" },
              ]}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="thermostat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="location-city" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

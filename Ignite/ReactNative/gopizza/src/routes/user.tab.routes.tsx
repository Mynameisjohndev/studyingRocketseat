import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ButtomMenu from "@components/BottomMenu";
import Home from "@screens/Home";
import Orders from "@screens/Orders";

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
  const [notifications, setNotifications] = useState("0");
  const { COLORS } = useTheme();

  useEffect(() => {
    const subscribe = firestore()
      .collection("orders")
      .where("status", "==", "Pronto")
      .onSnapshot((querySnapshot) => {
        setNotifications(String(querySnapshot.docs.length))
      });
    return () => subscribe();
  }, []);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          padding: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtomMenu color={color} title="Cardápio" />
          ),
        }}
      />
      <Screen
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtomMenu
              color={color}
              title="Pedidos"
              notifications={notifications}
            />
          ),
        }}
      />
    </Navigator>
  );
}

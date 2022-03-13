import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Order from "./screens/Order";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

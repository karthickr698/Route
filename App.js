import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Provider as PaperProvider, Colors } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Antd from "react-native-vector-icons/AntDesign";
import Routes from "./Routes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "./components/CustomSidebar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigationRef } from "./utils/RootNavigation";
import Profile from "./screens/Profile";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: "#00887A",
        inactiveTintColor: "rgba(0,0,0,0.3)",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Routes}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Antd {...props} />,
      }}
    >
      <>
        <StatusBar style="auto" backgroundColor="#00887A" />
        <NavigationContainer ref={navigationRef}>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    </PaperProvider>
  );
}

export default function AppWithAuth() {
  return <App />;
}

import React, { useContext } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { Subheading } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.profileBackground}>
        <View style={{ backgroundColor: "#ffffff" }}>
          <AntDesign name="user" size={60} color="#000000" />
        </View>
        <Subheading style={styles.userText}>{"Karthick"}</Subheading>
        <Text style={styles.builderText}>{"+91-8220504785"}</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 4,
    alignSelf: "center",
    backgroundColor: "#E0E9F8",
    marginTop: 25,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  userText: {
    alignSelf: "center",
    marginTop: 0,
  },
  builderText: {
    alignSelf: "center",
    color: "black",
  },
  profileBackground: {
    backgroundColor: "#ffffff",
    paddingBottom: 10,
    paddingTop: 80,
    alignItems: "center",
  },
});

export default CustomSidebarMenu;

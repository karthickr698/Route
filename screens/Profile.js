import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.navbar}>
          <ImageBackground
            source={require("../BackImage/Image.png")}
            style={styles.navImage}
          >
            <View style={{ paddingTop: 40, paddingLeft: 0 }}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Bars style={styles.icon} name="bars" size={35} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.picCnt}>
              <View>
                <Text style={styles.greet}>Hello {"Karthick"}!</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.push("Profile")}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{
                      textAlign: "center",
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                    }}
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                    }}
                  />
                </View>
                <Text style={styles.picTxt}>View profile</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  navbar: {
    backgroundColor: "#00887A",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 200,
  },
  navImage: {
    backgroundColor: "#00887A",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 200,
  },
  icon: {
    paddingLeft: 15,
  },
  greet: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "600",
  },
  picCnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 5,
  },
  picTxt: {
    color: "#ffffff",
    fontSize: 16,
    paddingVertical: 5,
  },
  main: {
    marginBottom: 50,
    marginTop: 40,
    borderRadius: 30,
    borderColor: "#e4e4e5",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-around",
    paddingVertical: 30,
    marginHorizontal: 10,
    paddingHorizontal: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  search: {
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: "grey",
    color: "#000000",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.84,
    elevation: 2,
    width: "100%",
    fontSize: 16,
  },
  doc: {
    minWidth: 160,
    minHeight: 150,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "#447C69",
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  txt: {
    paddingTop: 10,
    fontWeight: "bold",
    color: "#00887A",
    fontSize: 17,
    maxWidth: 100,
    textAlign: "center",
  },
  text: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 12,
    textAlign: "center",
    opacity: 0.3,
  },
});

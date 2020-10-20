import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("Create");
    api
      .get("/projects")
      .then((response) => {
        console.log("Get Projects");
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((e) => {
        console.log("Error");
        console.log(e);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" translucent />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World React Native</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159C1",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
});

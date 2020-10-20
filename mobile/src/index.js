import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from "react-native";

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
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => <Text style={styles.project}>{project.title}</Text>}
        ></FlatList>
        {/* <View style={styles.container}>
        {projects.map((project) => (
          <Text key={project.id} style={styles.project}>
          {project.title}
          </Text>
          ))}
        </View> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159C1",
    /* justifyContent: "center",
    alignItems: "center", */
  },
  project: {
    color: "#FFF",
    fontSize: 20,
  },
});

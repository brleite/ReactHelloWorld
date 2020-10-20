import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

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

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Bruno Mayerle Leite",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => <Text style={styles.project}>{project.title}</Text>}
        ></FlatList>
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
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
  button: {
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

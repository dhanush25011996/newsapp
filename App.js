import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import NewApp from "./pages/NewApp";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <NewApp />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
});

export default App;

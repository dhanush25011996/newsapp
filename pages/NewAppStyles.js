import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headText: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 30,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  article: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 0,
    padding: 10,
  },
  sourceName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default styles;

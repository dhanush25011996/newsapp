import { Alert, ActivityIndicator, Text, View, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./NewAppStyles";

const NewApp = () => {
  const [totalResults, setTotalResults] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewsData = async () => {
    try {
      setIsLoading(true);
      const baseUrl =
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7e87ddcc9fb0434db6d4f1564041ed6b";
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setTotalResults(data.totalResults);
      setArticles(data.articles);
    } catch (error) {
      Alert.alert("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Dhanush's NewApp</Text>
      <View style={styles.refreshButton}>
        <Button title="Refresh" onPress={fetchNewsData} disabled={isLoading} />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>Total Results: {totalResults}</Text>
          {articles.map((item, index) => (
            <View style={styles.article} key={index}>
              <Text style={styles.sourceName}>{item.source.name}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 200, height: 200 }}
              />
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default NewApp;

import {
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
  Text,
  View,
} from "react-native";
import Post from "./components/Post";
import React from "react";
import axios from "axios";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://5c3755177820ff0014d92711.mockapi.io/articles")
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Ошибка при получении статей");
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
      <StatusBar theme="auto" />
    </View>
  );
}

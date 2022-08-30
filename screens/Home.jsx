import React from "react";
import axios from "axios";
import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import Post from "../components/Post";
import Loading from "../components/Loading";

const Home = () => {
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
        <Loading />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post key={item.id} {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

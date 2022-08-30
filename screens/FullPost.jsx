import React from "react";
import { Alert, View } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPost = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/articles/1`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
};

export default FullPost;

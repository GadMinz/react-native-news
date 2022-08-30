import React from "react";
import { View } from "react-native";

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
  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{uri: 'https://art.mau.ru/foto/dream/001.jpg'}} />
        <PostText>Lorem</PostText>
    </View>
  );
};

export default FullPost;

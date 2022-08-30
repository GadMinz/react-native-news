import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
const PostImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: "https://ru-static.z-dn.net/files/d92/63e9df594bdc220811e62f3688fe7692.jpg",
          }}
        />
        <PostDetails>
          <PostTitle>Тестовая статья</PostTitle>
          <PostDate>30/08/2022</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}

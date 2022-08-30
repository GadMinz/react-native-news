import { StatusBar,View } from "react-native";
import Post from "./components/Post";

export default function App() {
  return (
    <View>
      <Post
        title="test"
        createdAt="30/08/2022"
        imageUrl="https://ru-static.z-dn.net/files/d92/63e9df594bdc220811e62f3688fe7692.jpg"
      />
      <StatusBar theme="auto" />
    </View>
  );
}

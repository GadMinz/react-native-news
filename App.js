import React from "react";
import Home from "./screens/Home";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar theme="auto" />
    </View>
  );
}

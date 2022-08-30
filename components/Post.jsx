import React from "react";
import styled from "styled-components/native";

const PostView = styled.View`
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

const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: { imageUrl } }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};

export default Post;

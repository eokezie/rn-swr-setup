import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../hooks/useUser";

type PostData = {
  title: string;
  body: string;
  userId: number;
};
const PostListitems: React.FC<PostData> = ({ body, title, userId }) => {
  const { user } = useUser(userId);
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    color: "gray",
  },
});

export default PostListitems;

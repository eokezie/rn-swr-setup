import { ActivityIndicator, Text, FlatList } from "react-native";

import { usePosts } from "../hooks/usePost";
import PostListitems from "../components/PostListitems";

export default function App() {
  const { error, isLoading, post } = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data {error.message} </Text>;
  }

  return (
    <FlatList
      data={post}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }: any) => (
        <PostListitems
          title={item.title}
          body={item.body}
          userId={item.userId}
        />
      )}
    />
  );
}

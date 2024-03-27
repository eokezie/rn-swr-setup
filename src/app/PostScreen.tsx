import { ActivityIndicator, Text, FlatList, Button, Alert } from "react-native";
// import { useSWRConfig } from "swr";

import { usePosts, useCreatePost } from "../hooks/usePost";
import { PostDataType } from "../hooks/usePost";
import PostListitems from "../components/PostListitems";

export default function App() {
  const { error, isLoading, post, mutate } = usePosts();

  const { trigger, newPost } = useCreatePost();

  const runMutate = () => {
    mutate();
  };

  const onCreatePost = async () => {
    const newData: PostDataType | any = {
      title: "Title",
      body: "Post body content",
      userid: 2,
    };

    try {
      await trigger(newData, {
        optimisticData: (current) => {
          return [newData, ...current];
        },
        revalidate: false,
      });
    } catch (e) {
      Alert.alert("Failed to create post");
    }
  };

  console.log(newPost);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data {error.message} </Text>;
  }

  return (
    <>
      <Button title="Refresh" onPress={runMutate} />
      <Button title="Create Post" onPress={onCreatePost} />
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
    </>
  );
}

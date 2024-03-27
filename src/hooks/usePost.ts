import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export type PostDataType = {
  title: string;
  body: string;
  userid: number;
};

export function usePosts() {
  const { data, isLoading, error, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    post: data,
    isLoading,
    error,
    mutate,
  };
}

// Creating a new post
const createPost = async (url: string, postData: PostDataType) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response.json();
};

export function useCreatePost() {
  const { trigger, data, isMutating, error } = useSWRMutation(
    "https://jsonplaceholder.typicode.com/posts",
    createPost
  );

  return {
    trigger,
    newPost: data,
    isMutating,
    error,
  };
}

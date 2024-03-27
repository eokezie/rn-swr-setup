import { StyleSheet, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SWRConfig } from "swr";

import { fetcher } from "./src/utils/fetcher";
import PostScreen from "./src/app/PostScreen";

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <View style={styles.container}>
        <PostScreen />

        <StatusBar style="auto" />
      </View>
    </SWRConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

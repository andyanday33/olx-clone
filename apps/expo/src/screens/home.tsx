import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
import { trpc } from "../utils/trpc";
import React from "react";

export const HomeScreen = () => {
  // const postQuery = trpc.post.all.useQuery();
  // const [showPost, setShowPost] = React.useState<string | null>(null);

  return (
    <SafeAreaView>
      <View className="h-full w-full p-4"></View>
    </SafeAreaView>
  );
};

import { SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";
import { FlashList } from "@shopify/flash-list";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
import { trpc } from "../utils/trpc";
import React from "react";
import { Text } from '../shared/Typography';
import { Button } from "../shared/Button";

export const HomeScreen = () => {
  // const postQuery = trpc.post.all.useQuery();
  // const [showPost, setShowPost] = React.useState<string | null>(null);

  return (
    <SafeAreaView>
      <View className="h-full w-full p-4">

        <Text color="primary" size={36} textAlign="center">
          Olx.pl 👻
        </Text>
        {/* 
        <View className="py-2">
          {showPost ? (
            <Text>
              <Text className="font-semibold">Selected post:</Text>
              {showPost}
            </Text>
          ) : (
            <Text className="italic font-semibold">Press on a post</Text>
          )}
        </View> */}
        <Button text="Zaloguj się">
        </Button>
      </View>
    </SafeAreaView>
  );
};

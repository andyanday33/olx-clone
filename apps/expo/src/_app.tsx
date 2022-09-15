import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { ComponentType } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";
import { Session, SessionProvider } from "@acme/auth/client";

import { HomeScreen } from "./screens/home";
import { InitialProps } from "expo/build/launch/withExpoRoot.types";

const App: ComponentType<InitialProps> = ({ session, ...props }) => {
  return (
    <SessionProvider session={session}>
      <TRPCProvider>
        <SafeAreaProvider>
          <HomeScreen />
          <StatusBar />
        </SafeAreaProvider>
      </TRPCProvider>
    </SessionProvider>
  );
};

registerRootComponent(App);

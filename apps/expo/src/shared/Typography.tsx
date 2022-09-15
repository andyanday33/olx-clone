//custom Text component based on React Native Text component

import React from 'react';
import { Text as TextBase, TextProps, TextStyle } from 'react-native';
import { COLORS, COLOR_TYPES } from '../theme';

interface Props extends TextStyle {
  children: React.ReactNode;
  color?: COLOR_TYPES;
  size?: number;
  weight?: 'bold' | 'normal';
}

const Text = ({ children, color = COLORS.dark as COLOR_TYPES, size = 16, weight = 'normal', ...props }: Props) => {

  return (
    <TextBase
      style={{
        color: COLORS[color],
        fontSize: size,
        fontWeight: weight,
      }}
      {...props}
    >
      {children}
    </TextBase>
  );
};

export { Text };

//         </Text>
//         <Text className="text-2xl font-bold mx-auto pb-2">
//           Welcome to the trpc example app
//         </Text>
//         <Text className="text-lg mx-auto pb-2">
//           This is a simple example of how to use trpc in a React Native app.
//         </Text>
//         <Text className="text-lg mx-auto pb-2">
//           It uses{" "}
//           <Text className="text-blue-500" onPress={() => Linking.openURL("https://expo.io")}>
//             Expo
//           </Text>{" "}
//           for bundling and{" "}
//           <Text className="text-blue-500" onPress={() => Linking.openURL("https://nextjs.org")}>
//             Next.js
//           </Text>{" "}
//           for SSR.
//         </Text>
//         <Text className="text-lg mx-auto pb-2">
//           The source code is available on{" "}
//           <Text className="text-blue-500" onPress={() => Linking.openURL("
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export const Login = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text> Demo Form </Text>
      <View className="flex items-center">
        <TextInput placeholder="Email" className="mt-5 h-10 w-40 rounded-lg bg-white px-3" />
        <TextInput placeholder="Password" className="m-5 h-10 w-40 rounded-lg bg-white px-3" />
      </View>
    </View>
  );
};

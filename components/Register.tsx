import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export const Register = () => {
  const [value, setValue] = useState(0);
  const [location, setLocation] = useState('US');
  return (
    <View>
      <Text> Demo Form </Text>
      <View className="flex items-center">
        <TextInput placeholder="Email" className="mt-5 h-10 w-52 rounded-lg bg-white px-3" />
        <TextInput
          placeholder="Create Password"
          className="mt-5 h-10 w-52 rounded-lg bg-white px-3"
        />
        <TextInput
          placeholder="Confirm Password"
          className="m-5 h-10 w-52 rounded-lg bg-white px-3"
        />
      </View>
      <View className="mt-2 w-full bg-white">
        <Text className="absolute text-xl font-bold"> Select Location </Text>
        <Picker
          selectedValue={location}
          onValueChange={(currentLocation) => setLocation(currentLocation)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="CAN" value="Canadian Dollars" />
        </Picker>
      </View>
    </View>
  );
};

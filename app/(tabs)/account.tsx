import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { LoginModal, RegisterModal } from '../../components/Modals';

export default function Account() {
  const [currency, setCurrency] = useState('US Dollar');

  return (
    <View className="flex-1 p-6">
      <View>
        <LoginModal />
        <RegisterModal />
      </View>
      <View className="p-6">
        <Text> Select Currency </Text>
        <Picker
          selectedValue={currency}
          onValueChange={(currentCurrency) => setCurrency(currentCurrency)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="CAN" value="Canadian Dollars" />
        </Picker>
        <Text>Selected: {currency}</Text>
      </View>
    </View>
  );
}

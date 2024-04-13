import { View, Text, ScrollView } from 'react-native';

export default function Home() {
  return (
    <>
      <ScrollView className="flex-1">
        <Text className="mx-4 mt-4 text-2xl font-bold text-gray-800">Kansas City, MO</Text>
        <View className="mt-6">
          <Text className="mx-4 text-xl font-bold text-gray-800">Sports Near Kansas City</Text>
          <ScrollView className="mt-4 flex" horizontal>
            <View className="ml-4 h-40 w-40 flex-none rounded-lg bg-gray-200" />
            <View className="ml-4 h-40 w-40 flex-none rounded-lg bg-gray-200" />
            <View className="ml-4 h-40 w-40 flex-none rounded-lg bg-gray-200" />
            <View className="ml-4 mr-4 h-40 w-40 flex-none rounded-lg bg-gray-200" />
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}

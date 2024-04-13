import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';

type Event = {
  name: string;
  imageUrl: string;
};
type Events = {
  sports: Event[];
  concerts: Event[];
  theater: Event[];
};
const events: Events = {
  sports: [{ name: 'Kansas City Royals', imageUrl: 'https://via.placeholder.com/150' }],
  concerts: [{ name: 'Kenny Chesney', imageUrl: 'https://via.placeholder.com/150' }],
  theater: [{ name: 'Jeff Dunham', imageUrl: 'https://via.placeholder.com/150' }],
};
export default function Home() {
  return (
    <>
      <ScrollView className="flex-1">
        <Text className="mx-4 mt-4 text-2xl font-bold text-gray-800">Kansas City, MO</Text>
        <CategoryView category="Sports" city="Kansas City" events={events.sports} />
        <CategoryView category="Concerts" city="Kansas City" events={events.concerts} />
        <CategoryView category="Theater" city="Kansas City" events={events.theater} />
      </ScrollView>
    </>
  );
}

type CategoryViewProps = {
  category: string;
  city: string;
  events: Event[];
};
function CategoryView({ category, city, events }: CategoryViewProps) {
  return (
    <View className="mt-6">
      <Text className="mx-4 text-xl font-bold text-gray-800">
        {category} Near {city}
      </Text>
      <ScrollView className="mt-4 flex" horizontal>
        {events.map((event, index) => (
          <EventView key={index} event={event} />
        ))}
      </ScrollView>
    </View>
  );
}

function EventView({ event }: { event: Event }) {
  return (
    <View className="ml-4 h-40 w-40 flex-none rounded-lg bg-gray-200">
      <Image
        source={{ uri: event.imageUrl }}
        style={{ flex: 1, width: '100%' }}
        contentFit="cover"
      />
      <Text className="text-center text-sm font-bold text-gray-800">{event.name}</Text>
    </View>
  );
}

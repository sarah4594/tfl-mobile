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
  sports: [
    {
      name: 'Kansas City Royals',
      imageUrl: 'https://i.tixcdn.io/tcms/264/performer/Kansas_City_Royals_Logo.jpg',
    },
    {
      name: 'Monster Jam',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/category/truck-racing.jpg',
    },
    {
      name: 'Sporting Kansas City vs. Inter Miami CF',
      imageUrl: 'https://i.tixcdn.io/tcms/264/list/soccer-2.jpg',
    },
    {
      name: 'WWE: Raw',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/category/WWE.jpg',
    },
  ],
  concerts: [
    {
      name: 'Kenny Chesney',
      imageUrl: 'https://i.tixcdn.io/tcms/264/performer/15536365000_6ec12851bb_b%20%281%29.jpg',
    },
    {
      name: 'Morgan Wallen',
      imageUrl:
        'https://i.tixcdn.io/tcms/264/performer/Morgan_Wallen_performing_in_Salt_Lake_City.jpg',
    },
    {
      name: 'Olivia Rodrigo',
      imageUrl: 'https://i.tixcdn.io/tcms/264/performer/Olivia_Rodrigo.jpg',
    },
    {
      name: 'Hozier',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/performer/Hozier.jpg',
    },
  ],
  theater: [
    {
      name: 'Jeff Dunham',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/performer/Jeff_Dunham.jpg',
    },
    {
      name: 'Tom Segura',
      imageUrl: 'https://i.tixcdn.io/tcms/264/performer/shutterstock_1007889334-2.jpg',
    },
    {
      name: 'Jimmy Carr',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/performer/Jimmy_Carr.jpg',
    },
    {
      name: 'Wanda Sykes',
      imageUrl: 'https://i.tixcdn.io/tcms/10006/category/shutterstock_1007889328.jpg',
    },
  ],
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
          <EventView key={index} event={event} isLast={index === events.length - 1} />
        ))}
      </ScrollView>
    </View>
  );
}

function EventView({ event, isLast }: { event: Event; isLast?: boolean }) {
  return (
    <View className={`ml-4 h-72 w-72 flex-none bg-gray-200 ${isLast ? 'mr-4' : ''}`}>
      <Image
        source={{ uri: event.imageUrl }}
        style={{ flex: 1, width: '100%' }}
        contentFit="cover"
      />
      <Text className="absolute w-full bg-black/40 px-3 py-2 text-xl font-bold text-white">
        {event.name}
      </Text>
    </View>
  );
}
